import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Text } from '@defifarms/uikit'
import { getAddress } from 'utils/addressHelpers'
import { useAppDispatch } from 'state'
import { fetchFarmUserDataAsync } from 'state/farms'
import { Farm } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import { useERC20 } from 'hooks/useContract'
import ConnectWalletButton from 'components/ConnectWalletButton'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'
import useApproveFarm from '../../hooks/useApproveFarm'

const Action = styled.div`
  padding: 0 35px;
  margin-top: 27px;
`
export interface FarmWithStakedValue extends Farm {
  apr?: number
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  account?: string
  addLiquidityUrl?: string
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, account, addLiquidityUrl }) => {
  const { t } = useTranslation()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses } = farm
  const {
    allowance: allowanceAsString = 0,
    tokenBalance: tokenBalanceAsString = 0,
    stakedBalance: stakedBalanceAsString = 0,
    earnings: earningsAsString = 0,
  } = farm.userData || {}

  const allowance = new BigNumber(allowanceAsString)
  const tokenBalance = new BigNumber(tokenBalanceAsString)
  const stakedBalance = new BigNumber(stakedBalanceAsString)
  const earnings = new BigNumber(earningsAsString)
  const lpAddress = getAddress(lpAddresses)
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const dispatch = useAppDispatch()

  const lpContract = useERC20(lpAddress)

  const { onApprove } = useApproveFarm(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove, dispatch, account, pid])

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={farm.lpSymbol}
        pid={pid}
        addLiquidityUrl={addLiquidityUrl}
        userData={farm.userData}
      />
    ) : (
      <Button variant="four" mt="16px" width="100%" disabled={requestedApproval || !farm.apr} onClick={handleApprove}>
        {t('Enable Contract')}
      </Button>
    )
  }

  return (
    <Action>
      <Flex mb="13px">
        <Text textTransform="uppercase" color="text" pr="4px">
          Defiy
        </Text>
        <Text textTransform="uppercase" color="text">
          {t('Earned')}
        </Text>
      </Flex>
      <HarvestAction earnings={earnings} pid={pid} userData={farm.userData} />
      <Flex mt="34px">
        <Text textTransform="uppercase" color="text" pr="4px">
          {farm.lpSymbol}
        </Text>
        <Text textTransform="uppercase" color="text">
          {t('Staked')}
        </Text>
      </Flex>
      {!account ? <ConnectWalletButton mt="16px" width="100%" /> : renderApprovalOrStakeButton()}
    </Action>
  )
}

export default CardActions
