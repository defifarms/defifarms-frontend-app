import { BaseLayout, Heading, Text, Flex } from '@pancakeswap/uikit'
// import TotalValueLockedCard from './components/TotalValueLockedCard'
import { MainBackground } from 'components/Layout/MainBackground'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import styled from 'styled-components'
import CakeStats from 'views/Home/components/CakeStats'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import Announcements from './components/Announcements'
import FarmedStakingCard from './components/FarmStakingCard'
import FarmAssetCard from './components/FarmAssetCard'
import TeamMember from './components/TeamMember'

const Hero = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  background-color: #c4f4ff;
  border-radius: 10px;
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

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 60px;
  }
`

const MetaImage = styled.div`
  background-image: url(/images/home/bg-meta.png);
  background-repeat: no-repeat;
  background-position: 36px;
  background-size: contain;
  padding-left: 90px;
`

const Wrapper = styled.div`
  height: 306px;
  width: 504px;
  overflow: hidden;
  border-radius: 10px;
`
const MetaWrapper = styled.div`
  height: 573px;
  width: 573px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: #fff;
  border-radius: 50%;
  margin-top: -150px;
  padding-top: 150px;
`
const HeadingWrapper = styled.div`
  width: 515px;
  margin-left: 70px;
`

const Image = styled.img`
  width: 306px;
  height: 306px;
  margin-left: 95px;
`
const CardImage = styled.div`
  background-image: ${({ theme }) =>
    theme.isDark
      ? 'url(/images/home/logo-partner-binance-smart-chain.png)'
      : 'url(/images/home/logo-partner-binance-smart-chain-light.png)'};
  height: 53px;
  width: 188px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

const HeadingHome = styled(Heading)`
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 57px;
  background: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.contrast};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  margin-top: 47px;
`

const TextHome = styled(Text)`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  line-height: 27px;
  letter-spacing: 0em;
`

const FlexBox = styled(Flex)`
  align-items: center;
  padding-top: 20px;
`
const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <MainBackground>
        <Page>
          <Hero>
            <HeadingWrapper>
              <HeadingHome as="h1" scale="xl" mb="24px">
                {t('DeFiFarms')}
              </HeadingHome>
              <TextHome fontSize="18px" mb={18}>
                {t('The First NFTs Protocol Powerful Automatic Liquidity Acquisition Yield Farm & AMM')}
              </TextHome>

              <FlexBox>
                <TextHome fontSize="18px" mb={2} color="#FE0000">
                  {t('Powered by')}
                </TextHome>
                <CardImage />
              </FlexBox>
            </HeadingWrapper>
            <Wrapper>
              <MetaWrapper>
                <MetaImage>
                  <Image alt="alt" src="/images/home/meta.png" />
                </MetaImage>
              </MetaWrapper>
            </Wrapper>
          </Hero>
          <div>
            <Cards>
              <FarmedStakingCard />
              <Announcements />
            </Cards>
            <Cards>
              <FarmAssetCard title="Earn up to" value="378.89% APR" navLink="/farms" />
              <EarnAssetCard />
              <FarmAssetCard title="Lottery" value="Coming Soon" />
            </Cards>
          </div>
          <CakeStats />
          <TeamMember />
        </Page>
      </MainBackground>
    </>
  )
}

export default Home
