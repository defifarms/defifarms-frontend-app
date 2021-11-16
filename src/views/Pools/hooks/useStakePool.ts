import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { updateUserBalance, updateUserStakedBalance } from 'state/actions'
import { stakeFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useStakePool = (sousId: number) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {
      await stakeFarm(masterChefContract, sousId, amount)
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, masterChefContract, sousId],
  )

  return { onStake: handleStake }
}

export default useStakePool
