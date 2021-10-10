import React from 'react'
import styled from 'styled-components'
import { BaseLayout, Heading, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import CakeStats from 'views/Home/components/CakeStats'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import Announcements from './components/Announcements'
import FarmedStakingCard from './components/FarmStakingCard'
// import TotalValueLockedCard from './components/TotalValueLockedCard'

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

const CardImage = styled.div`
  background-image: url(/images/home/logo-partner-binance-smart-chain.png);
  height: 50px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

const BgHome = styled.div`
  border-top-left-radius: ${({ theme }) => theme.radii.homeCorner};
  background-image: url(images/home/7.svg);
  background-color: rgba(0, 0, 0, ${({ theme }) => (theme.isDark ? '0.45' : '0.1')});
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: bottom center;
  height: 100vh;
  overflow: scroll;
  padding-bottom: 3rem;
`

const HeadingHome = styled(Heading)`
  font-style: normal;
  font-weight: 600;
  font-size: 62px;
  line-height: 62px;
  background: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.contrast};
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
            <TextHome>
              {t('The First NFTs Protocol Powerful Automatic Liquidity Acquisition Yield Farm & AMM')}
            </TextHome>
            <TextHome mb={2}>{t('Powered by')}</TextHome>
            <CardImage />
          </Hero>
          <div>
            <Cards>
              <FarmedStakingCard />
              <Announcements />
            </Cards>
            <Cards>
              <CakeStats />
              <div>
                <EarnAssetCard />
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
