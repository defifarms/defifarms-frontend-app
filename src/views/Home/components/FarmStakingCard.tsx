import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { BaseLayout, Button, Card, CardBody, Heading } from '@pancakeswap/uikit'
import { harvestFarm } from 'utils/calls'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useFarmsPoolWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import { useMasterchef } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import UnlockButton from '../../../components/UnlockButton'

const StyledFarmStakingCard = styled(Card)`
  min-height: 376px;
`

const Block = styled.div``

const CardImage = styled.img`
  margin-bottom: 25px;
  width: 100%;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const HeadingStakingCard = styled(Heading)`
  font-style: normal;
  font-weight: 600;
  line-height: 54px;
  letter-spacing: 0em;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(26, 36, 59, 0.17);
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

  return (
    <StyledFarmStakingCard>
      <CardBody style={{ padding: '24px 32px' }}>
        <HeadingStakingCard scale="xl" mb="24px">
          {t('Farms & Staking')}
        </HeadingStakingCard>
        <CardImage src="/images/home/2.png"/>
        <Cards>
          <Block>
            <Label>{t('DEFIY to Harvest')}:</Label>
            <CakeHarvestBalance farmsWithBalance={balancesWithValueFarms} poolsWithBalance={balancesWithValuePools}/>
          </Block>
          <Block>
            <Label>{t('DEFIY in Wallet')}:</Label>
            <CakeWalletBalance/>
          </Block>
        </Cards>
        <Actions>
          {account ? (
            <Button id="harvest-all" disabled={pendingTx} onClick={harvestAll} width="100%">
              {pendingTx
                ? t('Collecting DEFIY')
                : t('Harvest all', {
                  count: balancesWithValueFarms.length + balancesWithValuePools.length,
                })}
            </Button>
          ) : (
            <UnlockButton width="100%"/>
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
