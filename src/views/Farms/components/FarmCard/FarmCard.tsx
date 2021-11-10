import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import QuestionHelper from 'components/QuestionHelper'
import { Flex, Skeleton, Text } from '@pancakeswap/uikit'
import { Farm } from 'state/types'
import { getBscScanLink } from 'utils'
import { useTranslation } from 'contexts/Localization'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import { getAddress } from 'utils/addressHelpers'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'

export interface FarmWithStakedValue extends Farm {
  apr?: number
  lpRewardsApr?: number
  liquidity?: BigNumber
}

const AccentGradient = keyframes`  
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`

const StyledCardAccent = styled.div``

const FCard = styled.div<{ isPromotedFarm: boolean }>`
  align-self: baseline;
  background: ${(props) => props.theme.card.backgroundCardTransparent};
  border-radius: ${({ theme, isPromotedFarm }) => (isPromotedFarm ? theme.radii.default : theme.radii.card)};
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  text-align: center;
  overflow: hidden;
  backdrop-filter: blur(5px);
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBorder};
  height: 1px;
  margin: 24px auto 0 auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundCardTransparent};
`

const FlexWrapper = styled(Flex)`
  padding: 0 35px;
  margin-bottom: 8px;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  displayApr: string
  removed: boolean
  cakePrice?: BigNumber
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, displayApr, removed, cakePrice, account }) => {
  const { t } = useTranslation()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  const totalValueFormatted =
    farm.liquidity && farm.liquidity.gt(0)
      ? `$${farm.liquidity.toNumber().toLocaleString(undefined, { maximumFractionDigits: 0 })}`
      : ''

  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '')
  const earnLabel = farm.dual ? farm.dual.earnLabel : t('DEFIY')

  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: farm.quoteToken.address,
    tokenAddress: farm.token.address,
  })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  const lpAddress = getAddress(farm.lpAddresses)
  const isPromotedFarm = farm.token.symbol === 'DEFIY'
  const harvestLock = parseInt(farm.harvestInterval) / 3600
  return (
    <FCard isPromotedFarm={isPromotedFarm}>
      {isPromotedFarm && <StyledCardAccent />}
      <CardHeading
        lpLabel={lpLabel}
        multiplier={farm.multiplier}
        isCommunityFarm={farm.isCommunity}
        token={farm.token}
        quoteToken={farm.quoteToken}
      />
      {!removed && (
        <FlexWrapper justifyContent="space-between" alignItems="center">
          <Text>{t('APR')}:</Text>
          <Text bold color="four" style={{ display: 'flex', alignItems: 'center' }}>
            {farm.apr ? (
              <>
                <ApyButton
                  lpLabel={lpLabel}
                  addLiquidityUrl={addLiquidityUrl}
                  cakePrice={cakePrice}
                  apr={farm.apr}
                  displayApr={displayApr}
                />
                {displayApr}%
              </>
            ) : (
              <Skeleton height={24} width={80} />
            )}
          </Text>
        </FlexWrapper>
      )}
      <FlexWrapper justifyContent="space-between">
        <Text>{t('Earn')}:</Text>
        <Text>{earnLabel}</Text>
      </FlexWrapper>
      <FlexWrapper justifyContent="space-between">
        <Text>{t('Deposit Fee')}:</Text>
        <Text>{farm.depositFeeBP}%</Text>
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
      <FlexWrapper justifyContent="space-between">
        <Text>{t('LP Type')}:</Text>
        <Text>{farm.lpSymbol}</Text>
      </FlexWrapper>
      <CardActionsContainer farm={farm} account={account} addLiquidityUrl={addLiquidityUrl} />
      <Divider />
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      <ExpandingWrapper expanded={showExpandableSection}>
        <DetailsSection
          removed={removed}
          bscScanAddress={getBscScanLink(lpAddress, 'address')}
          infoAddress={`https://pancakeswap.info/pool/${lpAddress}`}
          totalValueFormatted={totalValueFormatted}
          lpLabel={lpLabel}
          addLiquidityUrl={addLiquidityUrl}
        />
      </ExpandingWrapper>
    </FCard>
  )
}

export default FarmCard
