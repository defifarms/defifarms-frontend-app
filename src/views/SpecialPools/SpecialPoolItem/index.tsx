import { Flex, Heading, Text } from '@defifarms/uikit'
import { MainBackground } from 'components/Layout/MainBackground'
import PageHeader from 'components/PageHeader'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import styled from 'styled-components'
import { SpecialPoolConfigType } from 'state/types'



const ItemWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 16px 24px;
  background: linear-gradient(269.58deg, #3f09a1 25.78%, #3f09a7 18.47%);
  border-radius: ${({ theme }) => theme.radii.default};
  margin: 8px 0 16px;
`

const SpecialPoolItem: React.FC<{ poolConfig: SpecialPoolConfigType }> = ({ poolConfig }) => {
  const { t } = useTranslation()

  return (
    <ItemWrap>
      <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']} width="100%">

        <Flex flex="1" flexDirection="column" mr={['8px', 0]}>
        <Text>{t('Special Pools start on')}</Text>
          <Heading as="h1" scale="xxl" color="white">
            {poolConfig.name}
          </Heading>
          <Heading scale="md" color="white">
            {/* {t('Just stake some tokens to earn. High APR, low risk.')} */}
          </Heading>
        </Flex>
        <Flex flex="1" height="fit-content" justifyContent="center" alignItems="center" mt={['24px', null, '0']}>
          {/* <HelpButton /> */}
          {/* <BountyCard /> */}
        </Flex>
      </Flex>
    </ItemWrap>
  )
}

export default SpecialPoolItem
