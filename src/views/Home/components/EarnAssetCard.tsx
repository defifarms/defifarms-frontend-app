import React from 'react'
import styled from 'styled-components'
import orderBy from 'lodash/orderBy'
import { ArrowForwardIcon, Card, CardBody, Flex, Heading } from '@pancakeswap/uikit'
import { NavLink } from 'react-router-dom'
import pools from 'config/constants/pools'
import { Pool } from 'state/types'
import { useTranslation } from 'contexts/Localization'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
    margin-bottom: 20px;
  }
`
const CardMidContent = styled(Heading).attrs({ scale: 'xl' })`
  line-height: 44px;
`
const StyleCircleButton = styled.div`
    width: 44px;
    height: 44px;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 100px;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    display: flex;

`
const activeNonCakePools = pools.filter((pool) => !pool.isFinished && !pool.earningToken.symbol.includes('CAKE'))
const latestPools: Pool[] = orderBy(activeNonCakePools, ['sortOrder', 'pid'], ['desc', 'desc']).slice(0, 3)
// Always include CAKE
const assets = [...latestPools.map((pool) => pool.earningToken.symbol)].join(', ')

const EarnAssetCard = () => {
  const { t } = useTranslation()
  const assetText = t('Earn %assets% in Pools', { assets })
  const [earn, InPools] = assetText.split(assets)

  return (
    <StyledFarmStakingCard>
      <NavLink exact activeClassName="active" to="/pools" id="pool-cta">
        <CardBody>
          <Heading color="contrast" scale="lg">
            {earn}
          </Heading>
          <CardMidContent color="text">{assets}</CardMidContent>
          <Flex justifyContent="space-between">
            <Heading color="contrast" scale="lg">
              {InPools}
            </Heading>
            <StyleCircleButton>
              <ArrowForwardIcon color="white" />
            </StyleCircleButton>
          </Flex>
        </CardBody>
      </NavLink>
    </StyledFarmStakingCard>
  )
}

export default EarnAssetCard
