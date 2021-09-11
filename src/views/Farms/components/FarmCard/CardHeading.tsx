import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Tag } from '@pancakeswap/uikit'
import { CommunityTag, CoreTag } from 'components/Tags'
import { Token } from 'config/constants/types'
import { FarmImage } from 'components/FarmImage'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  token: Token
  quoteToken: Token
}

const Wrapper = styled(Flex)`
  border-bottom: 1px solid #e7e3eb;
  padding: 45px 32px 35px;
  margin-bottom: 24px;

  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({ lpLabel, multiplier, isCommunityFarm }) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Flex flexDirection="column" alignItems="flex-start">
        <Heading mb="9px">{lpLabel.split(' ')[0]}</Heading>
        <Flex justifyContent="center">
          {isCommunityFarm ? <CommunityTag /> : <CoreTag />}
          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
      <FarmImage src="/images/farm.png" />
    </Wrapper>
  )
}

export default CardHeading
