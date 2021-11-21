import { Heading, Text, Flex } from '@defifarms/uikit'
import { useTranslation } from 'contexts/Localization'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import useCountDownTimer from 'hooks/useCountDownTimer'
import Time from './Time'

interface ThemedBlock {
  disable?: boolean
  margin?: string
}

interface ThemedImage {
  width?: string
  height?: string
}

interface StyleIcon {
  bg: string
}

const Hero = styled.div`
  margin: auto;
  margin-bottom: 24px;
  padding-top: 116px;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  padding: 19px 18px;
  background: #FFA800;
  opacity: 0.98;
  backdrop-filter: blur(200px);
  ${({ theme }) => theme.mediaQueries.md} {
    flex-wrap: nowrap;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 40px 50px 46px 60px;
    justify-content: space-between;
    text-align: unset;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  align-items: end;
  padding-bottom: 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-wrap: nowrap;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    justify-content: space-between;
    text-align: unset;
  }
`

const HeroWrapper = styled.div`
  background-image: url(/images/home/ido.png);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
`

const HeadingWrapper = styled.div`
  width: 414px;
`

const Image = styled.img<ThemedImage>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-top: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin-top: 10px;
  }
`

const HeadingHome = styled(Heading)`
  font-family: HK Grotesk Bold;
  font-style: normal;
  font-size: 43px;
  line-height: 63px;
  color: #ffffff;
  margin-bottom: 9px;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 54.8571px;
  }
`

const BlockWrapper = styled.div`
  display: list-item;
  padding: 25px 0;
  flex-wrap: wrap;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    flex-wrap: nowrap;
    padding: 0;
  }
`

const Label = styled(Text)`
  margin: HK Grotesk;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  & > span {
    font-family: HK Grotesk Bold;
  }
`

const StyledButtonMenu = styled.a`
  font-family: HK Grotesk Bold;
  font-size: 15.683px;
  color: #FFFFFF;
  line-height: 41px;
  border-radius: 100px;
  background: #00BDE4;
  display: block;
  width: 174px;
  text-align: center;
`

const Block = styled.div<ThemedBlock>`
  width: 100%;
  height: 66.89px;
  background: ${({ disable }) => (disable ? '#E3E3E3' : '#fff')};
  border-radius: 4px;
  padding: 13px 10px 0;
  margin: 10px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 147.36px;
    margin: ${({ margin }) => margin || '0px'};
  }
`

const BlockLabel = styled.p`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 500;
  font-size: 12.8px;
  line-height: 15px;
  color: #333333;
`

const BlockValue = styled.p`
  font-family: HK Grotesk Bold;
  font-weight: 500;
  font-size: 19px;
  line-height: 22px;
  color: #333333;
`

const TimeWrapper = styled(Flex)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  padding-bottom: 13px;
  margin-bottom: 11px;
  justify-content: space-between;
  ${({ theme }) => theme.mediaQueries.lg} {
    justify-content: space-between;
    margin-right: 40px;
  }
`

const RealWrapper = styled(Flex)`
  background: #FFFFFF;
  border-radius: 5px; 
  padding: 15px 25px 15px 15px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-wrap: nowrap;
    width: 100%;
    justify-content: space-between;
  }
`

const RealTextWrapper = styled.div`
  padding: 0;  
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0 110px 0 28px;
  }
`

const RealLabel = styled(Text)`
  font-family: HK Grotesk Bold;
  font-size: 18px;
  line-height: 21px;
  color: #000;
  padding-top: 15px;
`

const RealDesc = styled(RealLabel)`
  font-size: 15.683px;
  line-height: 18px;
  color: #333;
  padding-top: 10px;
`

const Icon = styled.span<StyleIcon>`
  width: 25px;
  height: 25px;
  display: block;
  background-image: ${({ bg }) => `url(${bg})`};
  margin-right: 20px;
  border-radius: 50%;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  background: #C0B3A8;
  border-radius: 5px;
  padding: 5px 5px 0;
  margin-right: 0;
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 150px;
    height: 130px;
    padding: 5px 5px 0;
    margin-right: 25px;
  }
`

const Price = styled.p`
  font-family: HK Grotesk Bold;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  padding: 15px 0 46px;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: right;
  }
`

const IconWrapper = styled(Flex)`
  flex-wrap: wrap;
  padding-top: 10px;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`

const UpcomingIdo: React.FC = () => {
  const nextTime = 'Wed Dec 11 2024 12:28:10 GMT+0700'
  const { t } = useTranslation()
  const [timeHarvestRemaining, setTimeHarvestRemaining] = useCountDownTimer()
  useEffect(() => {
    const current = new Date(nextTime).getTime()
    setTimeHarvestRemaining(Math.max(current - new Date().getTime(), 0))
  }, [setTimeHarvestRemaining])

  const timeLeft = {
    days: Math.floor(timeHarvestRemaining / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeHarvestRemaining / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((timeHarvestRemaining / 1000 / 60) % 60),
    seconds: Math.floor((timeHarvestRemaining / 1000) % 60),
  }

  return (
    <Hero>
      <HeaderWrapper>
        <HeadingWrapper>
          <HeadingHome as="h1" scale="xl" mb="24px">
            {t('Upcoming IDO')}
          </HeadingHome>
          <TimeWrapper>
            <Time time={timeLeft.days} label="Day" />
            <Time time={timeLeft.hours} label="Hours" />
            <Time time={timeLeft.minutes} label="Minutes" />
            <Time time={timeLeft.seconds} label="Seconds" />
          </TimeWrapper>
          <Label>
            Estimated Target Date: <span>{nextTime}</span>
          </Label>
        </HeadingWrapper>
        <BlockWrapper>
          <Block>
            <BlockLabel>Countdown For block:</BlockLabel>
            <BlockValue>#20643376</BlockValue>
          </Block>
          <Block disable margin="0 10px">
            <BlockLabel>Current Block:</BlockLabel>
            <BlockValue>#13645985</BlockValue>
          </Block>
          <Block disable>
            <BlockLabel>Remaining Block:</BlockLabel>
            <BlockValue>#6997391</BlockValue>
          </Block>
        </BlockWrapper>
      </HeaderWrapper>
      <RealWrapper>
        <Flex flexWrap="wrap" justifyContent="center">
          <ImageWrapper>
            <Image width="140px" height="88px" alt="alt" src="/images/home/real-realm.png" />
          </ImageWrapper>
          <Image width="75px" height="48px" alt="alt" src="/images/home/real-realm.png" />
          <RealTextWrapper>
            <RealLabel>Real Realm</RealLabel>
            <RealDesc>The 1st cross-chain lidydity DEX on Avalande</RealDesc>
            <IconWrapper>
              <Icon bg="/images/home/medium.png" />
              <Icon bg="/images/home/telegram.png" />
              <Icon bg="/images/home/twitter.png" />
            </IconWrapper>
          </RealTextWrapper>
        </Flex>
        <div>
          <Price>(GFX/BSUD)</Price>
          <StyledButtonMenu href="https://rocket.defifarms.org/" target="_blank">
            {t('Join now')}
          </StyledButtonMenu>
        </div>
      </RealWrapper>
      <HeroWrapper />

    </Hero>
  )
}

export default UpcomingIdo
