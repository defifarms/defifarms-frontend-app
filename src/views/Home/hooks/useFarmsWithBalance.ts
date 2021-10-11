import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import { farmsConfig, poolsConfig } from 'config/constants'
import { FarmConfig, PoolConfig } from 'config/constants/types'
import useRefresh from 'hooks/useRefresh'

export interface FarmWithBalance extends FarmConfig {
  balance: BigNumber
}

export interface PoolWithBalance extends PoolConfig {
  balance: BigNumber
}

const useFarmsPoolWithBalance = () => {
  const [farmsWithBalances, setFarmsWithBalances] = useState<FarmWithBalance[]>([])
  const [poolsWithBalances, setPoolsWithBalances] = useState<PoolWithBalance[]>([])

  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalancesFarms = async () => {
      const calls = farmsConfig.map((farm) => ({
        address: getMasterChefAddress(),
        name: 'pendingDefiFarm',
        params: [farm.pid, account],
      }))

      const rawResults = await multicall(masterChefABI, calls)
      const resultsFarm = farmsConfig.map((farm, index) => ({ ...farm, balance: new BigNumber(rawResults[index]) }))

      setFarmsWithBalances(resultsFarm)
    }

    const fetchBalancesPools = async () => {
      const calls = poolsConfig.map((pool) => ({
        address: getMasterChefAddress(),
        name: 'pendingDefiFarm',
        params: [pool.sousId, account],
      }))

      const rawResults = await multicall(masterChefABI, calls)
      const resultsPool = poolsConfig.map((pool, index) => ({ ...pool, balance: new BigNumber(rawResults[index]) }))

      setPoolsWithBalances(resultsPool)
    }

    if (account) {
      fetchBalancesFarms()
      fetchBalancesPools()
    }
  }, [account, fastRefresh])

  return { farm: farmsWithBalances, pool: poolsWithBalances }
}

export default useFarmsPoolWithBalance
