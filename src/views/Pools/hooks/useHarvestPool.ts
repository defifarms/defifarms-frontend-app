import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { updateUserBalance, updateUserPendingReward } from 'state/actions'
import { harvestFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useHarvestPool = (sousId) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    await harvestFarm(masterChefContract, sousId)
    dispatch(updateUserPendingReward(sousId, account))
    dispatch(updateUserBalance(sousId, account))
  }, [account, dispatch, masterChefContract, sousId])

  return { onReward: handleHarvest }
}

export default useHarvestPool
