import React from 'react'
import { CalculateIcon, Flex, IconButton, Skeleton, TooltipText, useModal, useTooltip, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import ApyCalculatorModal from 'components/ApyCalculatorModal'
import { Pool } from 'state/types'
import { getAprData } from 'views/Pools/helpers'
import { getAddress } from 'utils/addressHelpers'
import styled, { keyframes } from 'styled-components'
import QuestionHelper from 'components/QuestionHelper'

interface AprRowProps {
  pool: Pool
  performanceFee?: number
}

const FlexWrapper = styled(Flex)`
  margin-bottom: 8px;
`

const AprRow: React.FC<AprRowProps> = ({ pool, performanceFee = 0 }) => {
  const { t } = useTranslation()
  const { stakingToken, earningToken, isFinished, apr, earningTokenPrice, isAutoVault, harvestInterval } = pool
  const tooltipContent = isAutoVault
    ? t('APY includes compounding, APR doesn’t. This pool’s DEFIY is compounded automatically, so we show APY.')
    : t('This pool’s rewards aren’t compounded automatically, so we show APR')

  const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipContent, { placement: 'bottom-start' })

  const { apr: earningsPercentageToDisplay, roundingDecimals, compoundFrequency } = getAprData(pool, performanceFee)

  const apyModalLink = stakingToken.address ? `/swap?outputCurrency=${getAddress(stakingToken.address)}` : '/swap'
  const harvestLock = parseInt(harvestInterval) / 3600

  const [onPresentApyModal] = useModal(
    <ApyCalculatorModal
      tokenPrice={earningTokenPrice}
      apr={apr}
      linkLabel={t('Get %symbol%', { symbol: stakingToken.symbol })}
      linkHref={apyModalLink}
      earningTokenSymbol={earningToken.symbol}
      roundingDecimals={roundingDecimals}
      compoundFrequency={compoundFrequency}
      performanceFee={performanceFee}
    />,
  )

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" style={{ marginBottom: 10 }}>
        {tooltipVisible && tooltip}
        <TooltipText ref={targetRef}>{isAutoVault ? `${t('APY')}:` : `${t('APR')}:`}</TooltipText>
        {isFinished || !apr ? (
          <Skeleton width="82px" height="32px" />
        ) : (
          <Flex alignItems="center">
            <Balance
              fontSize="16px"
              isDisabled={isFinished}
              value={earningsPercentageToDisplay}
              decimals={2}
              unit="%"
              bold
            />
            <IconButton onClick={onPresentApyModal} variant="text" scale="sm">
              <CalculateIcon color="textSubtle" width="18px" />
            </IconButton>
          </Flex>
        )}
      </Flex>
      <FlexWrapper justifyContent="space-between">
        <Text>{t('Deposit Fee')}:</Text>
        <Text>{pool.depositFeeBP}%</Text>
      </FlexWrapper>
      <FlexWrapper justifyContent="space-between">
        <Text>
          {t('Harvest Lockup')}:
          <QuestionHelper
            text={t('How soon can you havest or compound again.')}
            ml="4px"
            style={{ display: 'inline' }}
          />
        </Text>
        <Text>{harvestLock} Hour(s)</Text>
      </FlexWrapper>
    </>
  )
}

export default AprRow
