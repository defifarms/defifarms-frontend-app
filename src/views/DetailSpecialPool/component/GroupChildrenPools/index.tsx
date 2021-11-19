import { Button, Card, Flex, Heading, Slider, Text } from '@defifarms/uikit'
import Container from 'components/Layout/Container'
import { MainBackground } from 'components/Layout/MainBackground'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { SpecialPoolConfigType } from 'state/types'
import styled from 'styled-components'
import { CurrencyLogo } from 'components/Logo'
import { TokenPairImage } from 'components/TokenImage'

import { SpecialPoolsConfig } from '../../../SpecialPools/config'


interface IGroupPools {
  currentSpecialPoolConfig: SpecialPoolConfigType
}

const CardSpecialPoolBody = styled.div`
  background: #2c007c80;
  padding: 16px;
  backdrop-filter: blur(5px);
`
const ContainerWrap = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const GroupChildrenPools: React.FC<IGroupPools> = ({ currentSpecialPoolConfig }) => {
  const { t } = useTranslation()

  return (
    <Flex flexDirection="column" width="100%" mt='16px'>
      {currentSpecialPoolConfig.childrenPools.map((pool) => (
        <Flex justifyContent="space-between" alignItems="center">
          {/* <CurrencyLogo currency={pool.stakingToken} size="24px" /> */}
          <TokenPairImage
            variant="inverted"
            primaryToken={pool.stakingToken}
            secondaryToken={pool.earningToken}
            width={64}
            height={64}
          />
          <Flex flexDirection="column" alignItems="flex-start">
            <Text>{pool.harvestInterval}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}

export default GroupChildrenPools
