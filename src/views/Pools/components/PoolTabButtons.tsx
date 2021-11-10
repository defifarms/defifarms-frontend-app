import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem, NotificationDot, Text, Toggle } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ToggleView, { ViewMode } from './ToggleView/ToggleView'

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
  }
`

const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`

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
const ButtonMenuStyled = styled(ButtonMenu)`
  background-color: #631ad1;
`

const PoolTabButtons = ({ stakedOnly, setStakedOnly, hasStakeInFinishedPools, viewMode, setViewMode }) => {
  const { url, isExact } = useRouteMatch()
  const { t } = useTranslation()

  const viewModeToggle = <ToggleView viewMode={viewMode} onToggle={(mode: ViewMode) => setViewMode(mode)} />

  const liveOrFinishedSwitch = (
    <Wrapper>
      <ButtonMenuStyled fullWidth activeIndex={isExact ? 0 : 1} scale="md" variant="primary">
        <ButtonMenuItem as={Link} to={`${url}`}>
          {t('Live')}
        </ButtonMenuItem>
        {/* <NotificationDot show={hasStakeInFinishedPools}> */}
        <ButtonMenuItem as={Link} to={`${url}/history`}>
          {t('Finished')}
        </ButtonMenuItem>
        {/* </NotificationDot> */}
      </ButtonMenuStyled>
    </Wrapper>
  )

  const stakedOnlySwitch = (
    <ToggleWrapper>
      <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} scale="sm" />
      <Text> {t('Staked only')}</Text>
    </ToggleWrapper>
  )

  return (
    <ViewControls>
      {viewModeToggle}
      {stakedOnlySwitch}
      {liveOrFinishedSwitch}
    </ViewControls>
  )
}

export default PoolTabButtons
