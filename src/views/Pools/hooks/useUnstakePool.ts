import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { updateUserBalance, updateUserPendingReward, updateUserStakedBalance } from 'state/actions'
import { unstakeFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useUnstakePool = (sousId) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleUnstake = useCallback(
    async (amount: string) => {
      await unstakeFarm(masterChefContract, sousId, amount)
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
      dispatch(updateUserPendingReward(sousId, account))
    },
    [account, dispatch, masterChefContract, sousId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakePool
