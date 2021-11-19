import { Flex, Heading, Text } from '@defifarms/uikit'
import { MainBackground } from 'components/Layout/MainBackground'
import PageHeader from 'components/PageHeader'
import { useTranslation } from 'contexts/Localization'
import { RouteComponentProps } from 'react-router'
import React from 'react'
import { SpecialPoolsConfig } from '../SpecialPools/config'

const DetailSpecialPool: React.FC<RouteComponentProps<{ groupPool: string }>> = ({
  history,
  match: {
    params: { groupPool },
  },
}) => {
  const { t } = useTranslation()
  const currentSpecialPoolConfig = SpecialPoolsConfig.find((pool) => pool.link === groupPool)

  return (
    <MainBackground>
      <PageHeader background="linear-gradient(269.58deg, #FF368B 25.78%, #FF368B 88.47%)" pageName="special-pools">
        <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
          <Flex flex="1" flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" scale="xxl" color="white">
              {t('Special Pools')} {groupPool}
            </Heading>
            <Heading scale="md" color="white">
              {t('Just stake some tokens to earn. High APR, low risk.')}
            </Heading>
          </Flex>
          <Flex flex="1" height="fit-content" justifyContent="center" alignItems="center" mt={['24px', null, '0']}>
            {/* <HelpButton /> */}
            {/* <BountyCard /> */}
          </Flex>
        </Flex>
        {currentSpecialPoolConfig.childrenPools.map((pool) => (
          <Text>{pool.harvestInterval}</Text>
        ))}
      </PageHeader>
    </MainBackground>
  )
}

export default DetailSpecialPool
