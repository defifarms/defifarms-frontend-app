import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { getBep20Contract, getDefiyContract } from 'utils/contractHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import { simpleRpcProvider } from 'utils/providers'
import useRefresh from './useRefresh'
import useLastUpdated from './useLastUpdated'
import tokens from '../config/constants/tokens'

type UseTokenBalanceState = {
  balance: BigNumber
  fetchStatus: FetchStatus
}

export enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  SUCCESS = 'success',
  FAILED = 'failed',
}

const useTokenBalance = (tokenAddress: string) => {
  const { NOT_FETCHED, SUCCESS, FAILED } = FetchStatus
  const [balanceState, setBalanceState] = useState<UseTokenBalanceState>({
    balance: BIG_ZERO,
    fetchStatus: NOT_FETCHED,
  })
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBep20Contract(tokenAddress)
      try {
        const res = await contract.balanceOf(account)
        setBalanceState({ balance: new BigNumber(res.toString()), fetchStatus: SUCCESS })
      } catch (e) {
        console.error(e)
        setBalanceState((prev) => ({
          ...prev,
          fetchStatus: FAILED,
        }))
      }
    }

    if (account) {
      fetchBalance()
    }
  }, [account, tokenAddress, fastRefresh, SUCCESS, FAILED])

  return balanceState
}

export const useTotalSupply = () => {
  const { slowRefresh } = useRefresh()
  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  useEffect(() => {
    async function fetchTotalSupply() {
      const cakeContract = getBep20Contract(tokens.defiy.address[97])
      const supply = await cakeContract.totalSupply()
      setTotalSupply(new BigNumber(supply.toString()))
    }

    fetchTotalSupply()
  }, [slowRefresh])

  return totalSupply
}

export const useMaxTransferAmount = () => {
  const { slowRefresh } = useRefresh()
  const [maxTransferAmount, setMaxTransferAmount] = useState<BigNumber>()

  useEffect(() => {
    async function fetchTotalSupply() {
      const cakeContract = getDefiyContract()
      const supply = await cakeContract.maxTransferAmount()
      setMaxTransferAmount(supply)
    }
    fetchTotalSupply()
  }, [slowRefresh])
  return maxTransferAmount
}

export const useBurnedBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(BIG_ZERO)
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBep20Contract(tokenAddress)
      const res = await contract.balanceOf('0x000000000000000000000000000000000000dEaD')
      setBalance(new BigNumber(res.toString()))
    }

    fetchBalance()
  }, [tokenAddress, slowRefresh])

  return balance
}

export const useGetBnbBalance = () => {
  const [fetchStatus, setFetchStatus] = useState(FetchStatus.NOT_FETCHED)
  const [balance, setBalance] = useState(BIG_ZERO)
  const { account } = useWeb3React()
  const { lastUpdated, setLastUpdated } = useLastUpdated()

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const walletBalance = await simpleRpcProvider.getBalance(account)
        setBalance(new BigNumber(walletBalance.toString()))
        setFetchStatus(FetchStatus.SUCCESS)
      } catch {
        setFetchStatus(FetchStatus.FAILED)
      }
    }

    if (account) {
      fetchBalance()
    }
  }, [account, lastUpdated, setBalance, setFetchStatus])

  return { balance, fetchStatus, refresh: setLastUpdated }
}

export default useTokenBalance
