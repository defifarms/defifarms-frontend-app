import { BaseLayout, Heading, Text, Flex } from '@defifarms/uikit'
import { useTranslation } from 'contexts/Localization'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import useCountDownTimer from 'hooks/useCountDownTimer'
import Time from './Time'

interface ThemedBlock {
  disable?: boolean
  margin?: string
}

const Hero = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 24px;
  padding-top: 116px;
  justify-content: center;
  flex-wrap: wrap;
  background: #06d5ee;
  opacity: 0.9;
  backdrop-filter: blur(200px);
  border-radius: 10px;
  text-align: center;
  align-items: center;
  padding: 19px 18px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-wrap: nowrap;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 19px 41px 24px 70px;
    justify-content: space-between;
    text-align: unset;
  }
`

const HeadingWrapper = styled.div``

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 30px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 378px;
    height: 232px;
    margin-top: 0px;
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
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
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
  background: #ffd400;
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 500;
  font-size: 26.3836px;
  line-height: 30px;
  color: #303030;
  padding: 7px 72px;
  line-height: 45px;
  border-radius: 100px;
`

const Block = styled.div<ThemedBlock>`
  width: 100%;
  height: 66.89px;
  background: ${({ disable }) => (disable ? '#E3E3E3' : '#fff')};
  border-radius: 4px;
  padding: 13px 10px 0;
  margin: 10px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 153.36px;
    margin: ${({ margin }) => margin || '0px'};
  }
`

const BlockLabel = styled.p`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
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
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.lg} {
    justify-content: flex-start;
    width: fit-content;
  }
`

const UpcomingIdo: React.FC = () => {
  const nextTime = 'Sat Nov 27 2021 05:10:47 GMT+0700'
  const { t } = useTranslation()
  const [timeHarvestRemaining, setTimeHarvestRemaining, isFinish] = useCountDownTimer()
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
        <BlockWrapper>
          <Block>
            <BlockLabel>Countdown For block:</BlockLabel>
            <BlockValue>#12999999</BlockValue>
          </Block>
          <Block disable margin="0 10px">
            <BlockLabel>Current Block:</BlockLabel>
            <BlockValue>#12531900</BlockValue>
          </Block>
          <Block disable>
            <BlockLabel>Remaining Block:</BlockLabel>
            <BlockValue>#468099</BlockValue>
          </Block>
        </BlockWrapper>

        <StyledButtonMenu href="https://rocket.defifarms.org/" target="_blank">
          {t('Join now')}
        </StyledButtonMenu>
      </HeadingWrapper>
      <Image alt="alt" src="/images/home/laptop.png" />
    </Hero>
  )
}

export default UpcomingIdo
