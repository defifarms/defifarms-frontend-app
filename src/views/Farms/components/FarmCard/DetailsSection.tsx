import React from 'react'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { Flex, LinkExternal, Skeleton, Text } from '@defifarms/uikit'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  lpLabel?: string
  addLiquidityUrl?: string
}

const Wrapper = styled.div`
  padding: 0 24px 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  infoAddress,
  removed,
  totalValueFormatted,
  lpLabel,
  addLiquidityUrl,
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text>{t('Total Liquidity')}:</Text>
        {totalValueFormatted ? <Text>{totalValueFormatted}</Text> : <Skeleton width={75} height={25} />}
      </Flex>
      {!removed && (
        <StyledLinkExternal color="four" href={addLiquidityUrl}>
          {t('Get %symbol%', { symbol: lpLabel })}
        </StyledLinkExternal>
      )}
      <StyledLinkExternal color="four" href={bscScanAddress}>
        {t('View Contract')}
      </StyledLinkExternal>
      {/* <StyledLinkExternal href={infoAddress}>{t('See Pair Info')}</StyledLinkExternal> */}
    </Wrapper>
  )
}

export default DetailsSection
