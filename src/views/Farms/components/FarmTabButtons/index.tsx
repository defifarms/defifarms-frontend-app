import React from 'react'
import styled from 'styled-components'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, NotificationDot } from '@defifarms/uikit'
import { useTranslation } from 'contexts/Localization'

interface FarmTabButtonsProps {
  hasStakeInFinishedFarms: boolean
}

const ButtonMenuStyled = styled(ButtonMenu)`
  background-color: #631ad1;
`

const FarmTabButtons: React.FC<FarmTabButtonsProps> = ({ hasStakeInFinishedFarms }) => {
  const { url } = useRouteMatch()
  const location = useLocation()
  const { t } = useTranslation()

  let activeIndex
  switch (location.pathname) {
    case '/farms':
      activeIndex = 0
      break
    case '/farms/history':
      activeIndex = 1
      break
    case '/farms/archived':
      activeIndex = 2
      break
    default:
      activeIndex = 0
      break
  }

  return (
    <Wrapper>
      <ButtonMenuStyled fullWidth activeIndex={activeIndex} scale="md" variant="primary">
        <ButtonMenuItem as={Link} to={`${url}`}>
          {t('Live')}
        </ButtonMenuItem>
        {/* <NotificationDot show={hasStakeInFinishedFarms}> */}
        <ButtonMenuItem as={Link} to={`${url}/history`}>
          {t('Finished')}
        </ButtonMenuItem>
        {/* </NotificationDot> */}
      </ButtonMenuStyled>
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`
