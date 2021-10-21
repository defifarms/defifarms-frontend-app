import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { CardFooter, ExpandableLabel, Flex, HelpIcon, useTooltip } from '@pancakeswap/uikit'
import { Pool } from 'state/types'
import { CompoundingPoolTag, ManualPoolTag } from 'components/Tags'
import ExpandedFooter from './ExpandedFooter'

interface FooterProps {
  pool: Pool
  account: string
  // totalCakeInVault?: BigNumber
}

const ExpandableButtonWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  button {
    padding: 0;
  }
`
const TextWrap = styled.span`
  color: #ffb230;
  font-weight: 400;
  font-size: 18px;
`
const WrapButton = styled.span`
  border: 1px solid #4663de;
  border-radius: 32px;
`

const Footer: React.FC<FooterProps> = ({ pool, account }) => {
  const { isAutoVault } = pool
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  const manualTooltipText = t('You must harvest and compound your earnings from this pool manually.')
  const autoTooltipText = t(
    'Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.',
  )

  const { targetRef, tooltip, tooltipVisible } = useTooltip(isAutoVault ? autoTooltipText : manualTooltipText, {
    placement: 'bottom',
  })

  return (
    <CardFooter>
      <ExpandableButtonWrapper>
        <Flex alignItems="center">
          <WrapButton>{isAutoVault ? <CompoundingPoolTag /> : <ManualPoolTag />}</WrapButton>
          {tooltipVisible && tooltip}
          <Flex ref={targetRef}>
            <HelpIcon ml="4px" width="20px" height="20px" color="textSubtle" />
          </Flex>
        </Flex>
        <ExpandableLabel color="four" expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
          <TextWrap>{isExpanded ? t('Hide') : t('Details')}</TextWrap>
        </ExpandableLabel>
      </ExpandableButtonWrapper>
      {isExpanded && <ExpandedFooter pool={pool} account={account} />}
    </CardFooter>
  )
}

export default Footer
