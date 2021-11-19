import { CardBody, CardRibbon, Flex, Text, Slider } from '@defifarms/uikit'
import BigNumber from 'bignumber.js'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { Pool } from 'state/types'
import styled from 'styled-components'
import { BIG_ZERO } from 'utils/bigNumber'
import AprRow from './AprRow'
import CardActions from './CardActions'
import CardFooter from './CardFooter'
import { StyledCard, StyledCardInner } from './StyledCard'
import StyledCardHeader from './StyledCardHeader'

const CardBodyStyled = styled(CardBody)`
  // background-color: #2c007c60;
`

const PoolCard: React.FC<{ pool: Pool; account: string }> = ({ pool, account }) => {
  const { sousId, stakingToken, earningToken, isFinished, userData } = pool
  const { t } = useTranslation()
  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const accountHasStakedBalance = stakedBalance.gt(0)

  const handleChangePercent = (sliderPercent: number) => {
    console.log('handleChangePercent', sliderPercent)
  }
  return (
    <StyledCard
      isFinished={isFinished && sousId !== 0}
      ribbon={isFinished && <CardRibbon variantColor="textDisabled" text={t('Finished')} />}
    >
      <StyledCardInner>
        <StyledCardHeader
          isStaking={accountHasStakedBalance}
          earningToken={earningToken}
          stakingToken={stakingToken}
          isFinished={isFinished && sousId !== 0}
        />
        <CardBodyStyled>
          <AprRow pool={pool} />
          <Flex mt="24px" flexDirection="column">
            {account ? (
              <CardActions pool={pool} stakedBalance={stakedBalance} />
            ) : (
              <>
                <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                  {t('Start earning')}
                </Text>
                <ConnectWalletButton />
              </>
            )}
          </Flex>
          <Flex mt="24px" flexDirection="row" justifyContent="space-between">
            <Text bold color="four">
              {t('Progress')}:
            </Text>
            <Text color="four">{t('6.000/10.000$')}</Text>
          </Flex>
          <Slider
            min={0}
            max={100}
            value={60}
            onValueChanged={handleChangePercent}
            name="stake"
            valueLabel={`${60}%`}
            step={1}
          />
          <Text>{t('Closed in')}: 1d : 20h : 10m</Text>
        </CardBodyStyled>
        <CardFooter pool={pool} account={account} />
      </StyledCardInner>
    </StyledCard>
  )
}

export default PoolCard
