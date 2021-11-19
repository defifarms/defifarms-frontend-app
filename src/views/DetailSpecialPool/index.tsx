import { Button, Card, Flex, Heading, Slider, Text } from '@defifarms/uikit'
import Container from 'components/Layout/Container'
import { MainBackground } from 'components/Layout/MainBackground'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'
import { SpecialPoolsConfig } from '../SpecialPools/config'
import GroupChildrenPools from './component/GroupChildrenPools'

const CardSpecialPool = styled(Card)<{ background?: string }>`
  background-color: unset;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
  
`
const CardSpecialPoolHeader = styled.div<{ background?: string }>`
  padding: 16px;
  background: #2c007c;
`
const CardSpecialPoolBody = styled.div<{ background?: string }>`
  background: #2c007c80;
  padding: 16px;
  backdrop-filter: blur(5px);
`
const ContainerWrap = styled(Container)<{ background?: string }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const PoolName = styled.div`
  background: #ff368b80;
  backdrop-filter: blur(200px);
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 8px 16px;

  font-family: HK Grotesk;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`

const DetailSpecialPool: React.FC<RouteComponentProps<{ groupPool:string }>> = ({
  history,
  match: {
    params: { groupPool },
  },
}) => {
  const { t } = useTranslation()
  const currentSpecialPoolConfig = SpecialPoolsConfig.find((pool) => pool.link === groupPool)

  return (
    <MainBackground>
      <ContainerWrap>
        <CardSpecialPool>
          <CardSpecialPoolHeader>
            <Flex justifyContent="space-between">
              <Flex />
              <Flex>
                <PoolName>{currentSpecialPoolConfig.name}</PoolName>
              </Flex>
              <Flex>
                <Text textAlign="right" mr="16px" fontSize="14px" color="#FFB800">
                  APR 700% | Lock-up tern 10 days
                </Text>
              </Flex>
            </Flex>
            <Flex justifyContent="center">
              <Heading as="h1" scale="xxl" color="white" fontFamily="HK Grotesk" mt="16px">
                {t('Cap Goals')}: ${currentSpecialPoolConfig.capGoal}
              </Heading>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>{t('Cap Goals raied')}</Text>
              <Text>60%</Text>
            </Flex>
            <Slider
              min={0}
              max={currentSpecialPoolConfig.capGoal}
              value={(currentSpecialPoolConfig.capGoal * 60) / 100}
              onValueChanged={() => null}
              name="stake"
              // valueLabel={`${60}%`}
              step={1}
            />
          </CardSpecialPoolHeader>
          <CardSpecialPoolBody>
            <Flex justifyContent="flex-start">
              <Text>{t('The pool allowcated stake by DEFIY 60%; Group BUSD, WBNB, BTCB, ETH, CAKE: 40%')}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Flex>
                <Heading as="h2" scale="xl" color="four" fontFamily="HK Grotesk" mt="16px">
                  {t('0.00')}
                </Heading>
              </Flex>
              <Flex>
                <Text color="white" fontFamily="HK Grotesk" mt="16px">
                  {t('Start staking')}
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <GroupChildrenPools currentSpecialPoolConfig={currentSpecialPoolConfig} />
            </Flex>
          </CardSpecialPoolBody>
        </CardSpecialPool>
      </ContainerWrap>
    </MainBackground>
  )
}

export default DetailSpecialPool
