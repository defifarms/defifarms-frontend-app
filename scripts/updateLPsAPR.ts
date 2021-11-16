import fs from 'fs'
import { request, gql } from 'graphql-request'
import BigNumber from 'bignumber.js'
import { ChainId } from '@defifarms/sdk'
import chunk from 'lodash/chunk'
import { sub, getUnixTime, format } from 'date-fns'
import farmsConfig from '../src/config/constants/farms'
import fetch from "node-fetch";

const BLOCK_SUBGRAPH_ENDPOINT = 'https://api.thegraph.com/subgraphs/name/pancakeswap/blocks'
const STREAMING_FAST_ENDPOINT = 'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2'
const BITQUERY_ENDPOINT = 'https://graphql.bitquery.io'

interface BlockResponse {
  blocks: {
    number: string
  }[]
}

interface SingleFarmResponse {
  id: string
  reserveUSD: string
  volumeUSD: string
}

interface FarmsResponse {
  farmsAtLatestBlock: SingleFarmResponse[]
  farmsOneWeekAgo: SingleFarmResponse[]
}

interface AprMap {
  [key: string]: BigNumber
}

const getWeekAgoTimestamp = () => {
  const weekAgo = sub(new Date(), { weeks: 1 })
  return getUnixTime(weekAgo)
}

const LP_HOLDERS_FEE = 0.0017
const WEEKS_IN_A_YEAR = 52.1429

const getBlockAtTimestamp = async (timestamp: number) => {
  try {
    const { blocks } = await request<BlockResponse>(
      BLOCK_SUBGRAPH_ENDPOINT,
      `query getBlock($timestampGreater: Int!, $timestampLess: Int!) {
        blocks(first: 1, where: { timestamp_gt: $timestampGreater, timestamp_lt: $timestampLess }) {
          number
        }
      }`,
      { timestampGreater: timestamp, timestampLess: timestamp + 600 },
    )
    return parseInt(blocks[0].number, 10)
  } catch (error) {
    throw new Error(`Failed to fetch block number for ${timestamp}\n${error}`)
  }
}

const getAprsForFarmGroup = async (addresses: string[], blockWeekAgo: number): Promise<AprMap> => {
  try {
    const { farmsAtLatestBlock, farmsOneWeekAgo } = await request<FarmsResponse>(
      STREAMING_FAST_ENDPOINT,
      gql`
        query farmsBulk($addresses: [String]!, $blockWeekAgo: Int!) {
          farmsAtLatestBlock: pairs(first: 30, where: { id_in: $addresses }) {
            id
            volumeUSD
            reserveUSD
          }
          farmsOneWeekAgo: pairs(first: 30, where: { id_in: $addresses }, block: { number: $blockWeekAgo }) {
            id
            volumeUSD
            reserveUSD
          }
        }
      `,
      { addresses, blockWeekAgo },
    )
    const aprs: AprMap = farmsAtLatestBlock.reduce((aprMap, farm) => {
      const farmWeekAgo = farmsOneWeekAgo.find((oldFarm) => oldFarm.id === farm.id)
      // In case farm is too new to estimate LP APR (i.e. not returned in farmsOneWeekAgo query) - return 0
      let lpApr = new BigNumber(0)
      if (farmWeekAgo) {
        const volume7d = new BigNumber(farm.volumeUSD).minus(new BigNumber(farmWeekAgo.volumeUSD))
        const lpFees7d = volume7d.times(LP_HOLDERS_FEE)
        const lpFeesInAYear = lpFees7d.times(WEEKS_IN_A_YEAR)
        // Some untracked pairs like KUN-QSD will report 0 volume
        if (lpFeesInAYear.gt(0)) {
          const liquidity = new BigNumber(farm.reserveUSD)
          lpApr = lpFeesInAYear.times(100).dividedBy(liquidity)
        }
      }
      return {
        ...aprMap,
        [farm.id]: lpApr.decimalPlaces(2).toNumber(),
      }
    }, {})
    return aprs
  } catch (error) {
    throw new Error(`Failed to fetch LP APR data: ${error}`)
  }
}

const fetchAndUpdateLPsAPR = async () => {
  // pids before 250 are inactive farms from v1 and failed v2 migration
  const lowerCaseAddresses = farmsConfig
    .filter((farm) => farm.pid > 1)
    .map((farm) => farm.lpAddresses[ChainId.TESTNET].toLowerCase())
  console.info(`Fetching farm data for ${lowerCaseAddresses.length} addresses`)
  // Split it into chunks of 30 addresses to avoid gateway timeout
  const addressesInGroups = chunk(lowerCaseAddresses, 30)
  const weekAgoTimestamp = getWeekAgoTimestamp()
  const blockWeekAgo = await getBlockAtTimestamp(weekAgoTimestamp)

  let allAprs: AprMap = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const groupOfAddresses of addressesInGroups) {
    // eslint-disable-next-line no-await-in-loop
    const aprs = await getAprsForFarmGroup(groupOfAddresses, blockWeekAgo)
    allAprs = { ...allAprs, ...aprs }
  }

  fs.writeFile(`src/config/constants/lpAprs.json`, JSON.stringify(allAprs, null, 2), (err) => {
    if (err) throw err
    console.info(` ✅ - lpAprs.json has been updated!`)
  })
}

// fetchAndUpdateLPsAPR()


const getQuery = async (addresses: string) => {
  const weekAgoTimestamp = getWeekAgoTimestamp()
  const weekAgoTime = format(new Date(weekAgoTimestamp*1000), 'yyyy-MM-dd')
  const currentTime = format(getUnixTime(new Date())*1000, 'yyyy-MM-dd')
  console.log('blockWeekAgo', weekAgoTimestamp, weekAgoTime, currentTime);
  
  const query = `
  query{
  ethereum(network: bsc_testnet) {
    transfers(currency: 
      {is: "${addresses}"}, 
      date: {since: "${weekAgoTime}", till: "${currentTime}"}) {
      currency {
        symbol
        address
      }
      date: date {
        date(format: "%y-%m-%d")
      }
      average: amount(calculate: average)
      amount
      count
      days: count(uniq: dates)
      sender_count: count(uniq: senders)
      receiver_count: count(uniq: receivers)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
  }
}
`;

  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "BQY35BfWzfTgsARQ4ePqdhjCtaW0PXhZ"
    },
    body: JSON.stringify({
      query
    })
  };
  return opts
}

const fetchData = async () => {
  const jsonQuery = await getQuery('0xf5cae1131ff6004f4091543b08e6264c73b703df')
  
  fetch(BITQUERY_ENDPOINT, jsonQuery)
    .then(res => res.json())
    .then(res => console.log(JSON.stringify(res)))
    .catch(console.error);
}
fetchData()