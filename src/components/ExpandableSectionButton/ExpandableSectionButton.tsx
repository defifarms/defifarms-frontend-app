import React from 'react'
import styled from 'styled-components'
import { ChevronDownIcon, ChevronUpIcon, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

export interface ExpandableSectionButtonProps {
  onClick?: () => void
  expanded?: boolean
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 24px 24px 24px;
  background-color: ${({ theme }) => theme.colors.backgroundCardTransparent};

  svg {
    fill: ${({ theme }) => theme.colors.four};
  }
`

const ExpandableSectionButton: React.FC<ExpandableSectionButtonProps> = ({ onClick, expanded }) => {
  const { t } = useTranslation()

  return (
    <Wrapper aria-label={t('Hide or show expandable content')} role="button" onClick={() => onClick()}>
      <Text color="four">{expanded ? t('Hide') : t('Details')}</Text>
      {expanded ? <ChevronUpIcon color="four" /> : <ChevronDownIcon color="four" />}
    </Wrapper>
  )
}

ExpandableSectionButton.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  expanded: false,
}

export default ExpandableSectionButton
