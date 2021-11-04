import React, { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'
import { BaseLayout, Button, Card, CardBody, Heading } from '@pancakeswap/uikit'
import { harvestFarm } from 'utils/calls'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useFarmsPoolWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import { useMasterchef } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import useCountDownTimer from 'hooks/useCountDownTimer'
import getTimePeriods from 'utils/getTimePeriods'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import UnlockButton from '../../../components/UnlockButton'

const StyledFarmStakingCard = styled(Card)`
  min-height: 376px;
  grid-column: span 6;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-column: span 8;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-column: span 8;
  }
`

const Block = styled.div``

const CardImage = styled.img`
  margin-bottom: 25px;
  width: 100%;
`

const Label = styled.div`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 600;
  font-size: 27.8455px;
  line-height: 32px;
  color: #0f0b5f;
`

const Actions = styled.div`
  margin-top: 24px;
`

const HeadingStakingCard = styled(Heading)`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 55px;
  color: #0f0b5f;
  margin-bottom: 13px;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  grid-gap: 0;

  & > div {
    grid-column: span 6;
    width: 100%;
  }
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const { toastError } = useToast()
  const farmsPoolWithBalance = useFarmsPoolWithBalance()
  const masterChefContract = useMasterchef()
  const balancesWithValueFarms = farmsPoolWithBalance.farm.filter((balanceType) => balanceType.balance.gt(0))
  const balancesWithValuePools = farmsPoolWithBalance.pool.filter((balanceType) => balanceType.balance.gt(0))
  const [timeHarvestRemaining, setTimeHarvestRemaining, isFinish] = useCountDownTimer()

  useEffect(() => {
    // console.log(
    //   'farmsPoolWithBalance',
    //   farmsPoolWithBalance.nextHarvestTime,
    //   new Date().getTime(),
    //   farmsPoolWithBalance.nextHarvestTime - (new Date().getTime()),
    // )
    setTimeHarvestRemaining(Math.max(farmsPoolWithBalance.nextHarvestTime - new Date().getTime(), 0))
  }, [farmsPoolWithBalance.nextHarvestTime, setTimeHarvestRemaining])

  const harvestAll = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of balancesWithValueFarms) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvestFarm(masterChefContract, farmWithBalance.pid)
      } catch (error) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const poolWithBalance of balancesWithValuePools) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvestFarm(masterChefContract, poolWithBalance.sousId)
      } catch (error) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
    }

    setPendingTx(false)
  }, [balancesWithValuePools, balancesWithValueFarms, masterChefContract, toastError, t])

  const getTimeRemainingText = (time) => {
    const { hours, minutes, seconds } = getTimePeriods(time / 1000)
    if (time <= 0) {
      return ''
    }
    return t(' %hour%h : %minute%m : %second%s', {
      hour: hours,
      minute: minutes,
      second: seconds,
    })
  }

  // const isDisableHarvest = !pendingTx && !isFinish

  return (
    <StyledFarmStakingCard>
      <CardBody style={{ padding: '28px 38px 42px' }}>
        <HeadingStakingCard scale="xl" mb="24px">
          {t('Farms & Staking')}
        </HeadingStakingCard>
        <CardImage src="/images/home/farm-staking.png" />
        <Cards>
          <Block>
            <Label>{t('DEFIY to Harvest')}:</Label>
            <CakeHarvestBalance farmsWithBalance={balancesWithValueFarms} poolsWithBalance={balancesWithValuePools} />
          </Block>
          <Block>
            <Label>{t('DEFIY in Wallet')}:</Label>
            <CakeWalletBalance />
          </Block>
        </Cards>
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={!pendingTx && !isFinish}
              onClick={harvestAll}
              width="100%"
              borderRadius="98px"
            >
              {pendingTx
                ? t('Collecting DEFIY')
                : t('Harvest all', {
                    count: balancesWithValueFarms.length + balancesWithValuePools.length,
                  })}
              {getTimeRemainingText(timeHarvestRemaining)}
            </Button>
          ) : (
            <UnlockButton width="100%" borderRadius="98px" />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
