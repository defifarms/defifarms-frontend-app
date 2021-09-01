import React from 'react'
import styled from 'styled-components'
import { BaseLayout, Heading, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
// import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import Announcements from './components/Announcements'
// import PredictionPromotionCard from 'views/Home/components/PredictionPromotionCard'
// import LotteryPromotionCard from 'views/Home/components/LotteryPromotionCard'
// import LotteryBanner from 'views/Home/components/LotteryBanner'
// import useFetchLotteryForPromos from 'views/Home/hooks/useFetchLotteryForPromos'

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 0;
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    padding-top: 0px;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 60px;

    & > div {
      grid-column: span 6;
    }
  }
`

const CardImage = styled.img``

const BgHome = styled.div`
  background: url(images/home/7.svg) rgb(176 232 251);
  background-repeat: no-repeat;
  background-position: bottom center;
`

const HeadingHome = styled(Heading)`
  font-style: normal;
  font-weight: 600;
  font-size: 62px;
  line-height: 94px;
  background: linear-gradient(180deg, #4663de 0%, #5d7afa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const TextHome = styled(Text)`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <BgHome>
        <Page>
          <Hero>
            <HeadingHome as="h1" scale="xl" mb="24px">
              {t('DeFiFarms')}
            </HeadingHome>
            <TextHome mb={18}>
              {t('The First NFTs Protocol Powerful Automatic Liquidity Acquisition Yield Farm & AMM')}
            </TextHome>
            <TextHome mb={2}>Powered by</TextHome>
            <CardImage src="/images/home/logo-partner-binance-smart-chain.png" />
          </Hero>
          <div>
            <Cards>
              {/* <FarmStakingCard /> */}
              <Announcements />
            </Cards>
            <Cards>
              <CakeStats />
              <div>
                {/* <EarnAssetCard /> */}
                {/* <TotalValueLockedCard /> */}
              </div>
            </Cards>
          </div>
        </Page>
      </BgHome>
    </>
  )
}

export default Home
