import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledAnnouncements = styled(Card)``

const TwitterDashboard = styled.div`
  font-size: 16px;
  line-height: 24px;
`

const CardImage = styled.img`
  width: 100%;
`

const HeadingCard = styled(Heading)`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 54px;
  letter-spacing: 0em;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(26, 36, 59, 0.17);
`

const Announcements = () => {
  const { t } = useTranslation()

  useEffect(() => {
    const scriptTag = document.createElement('script')

    scriptTag.src = 'https://platform.twitter.com/widgets.js'
    scriptTag.async = true

    document.getElementById('twitterDashboard').appendChild(scriptTag)
  }, [])

  return (
    <StyledAnnouncements>
      <CardBody>
        <HeadingCard scale="xl">{t('Announcements')}</HeadingCard>
        <TwitterDashboard id="twitterDashboard">
          <a
            className="twitter-timeline"
            data-height="400"
            data-theme="light"
            href="https://twitter.com/DeFiFarmsNFTs?ref_src=twsrc%5Etfw"
          >
            Tweets
          </a>
        </TwitterDashboard>
        {/* <CardImage src="/images/home/3.png" /> */}
      </CardBody>
    </StyledAnnouncements>
  )
}

export default Announcements
