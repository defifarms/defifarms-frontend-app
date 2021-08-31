import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useBurnedBalance, useTotalSupply } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getDefiyAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const HeadingCard = styled(Heading)`
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 54px;
  letter-spacing: 0em;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(26, 36, 59, 0.17);
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getDefiyAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledCakeStats>
      <CardBody>
        <HeadingCard scale="xl" mb="24px">
          {t('Defiy Stats')}
        </HeadingCard>
        <Row>
          <Text fontSize="14px">{t('Market Cap')}</Text>
          Updating
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Minted')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Locked Rewards')}</Text>
          Updating
        </Row>
        <Row>
          <Text fontSize="14px">{t('Circulating Supply')}</Text>
          Updating
        </Row>
        <Row>
          <Text fontSize="14px">{t('Max Tx Amount')}</Text>
          Updating
        </Row>
        <Row>
          <Text fontSize="14px">{t('New DEFIY/Block')}</Text>
          Updating
        </Row>
        <Row>
          <Text fontSize="14px">{t('Transfer Tax')}</Text>
          8%
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
