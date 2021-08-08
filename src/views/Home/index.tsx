import React from 'react'
import styled from 'styled-components'
// import styled from 'styled-components'
// import PageSection from 'components/PageSection'
// import { useWeb3React } from '@web3-react/core'
// import useTheme from 'hooks/useTheme'
// import Container from 'components/Layout/Container'
// import Hero from './components/Hero'
// import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
// import MetricsSection from './components/MetricsSection'
// import SalesSection from './components/SalesSection'
// import WinSection from './components/WinSection'
// import Footer from './components/Footer'
// import CakeDataRow from './components/CakeDataRow'
// import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
// import UserBanner from './components/UserBanner'

// const StyledHeroSection = styled(PageSection)`
//   padding-top: 16px;
//
//   ${({ theme }) => theme.mediaQueries.md} {
//     padding-top: 48px;
//   }
// `

// const UserBannerWrapper = styled(Container)`
//   z-index: 1;
//   position: absolute;
//   width: 100%;
//   top: 0px;
//   left: 50%;
//   transform: translate(-50%, 0);
//   padding-left: 0px;
//   padding-right: 0px;
//
//   ${({ theme }) => theme.mediaQueries.lg} {
//     padding-left: 24px;
//     padding-right: 24px;
//   }
// `

const HomeContainer = styled.div`
  background-image: url("images/bgLight.png");
  background-size: cover;
  min-height: calc(100vh - 88px);
`


const Home: React.FC = () => {
  // const { theme } = useTheme()
  // const { account } = useWeb3React()

  // const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  return (
    <>
      <HomeContainer />
    </>
  )
}

export default Home
