import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, lightColors } from '@defifarms/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledNav = styled.nav`
  margin-bottom: 40px;
`
const ButtonMenuStyled = styled(ButtonMenu)`
  background-color: #41128f;
  border-radius: 16px;
`
const ButtonMenuItemStyled = styled(ButtonMenuItem)``

const getActiveIndex = (pathname: string): number => {
  if (
    pathname.includes('/pool') ||
    pathname.includes('/create') ||
    pathname.includes('/add') ||
    pathname.includes('/remove') ||
    pathname.includes('/find') ||
    pathname.includes('/liquidity')
  ) {
    return 1
  }
  return 0
}

const Nav = () => {
  const location = useLocation()
  const { t } = useTranslation()
  return (
    <StyledNav>
      <ButtonMenuStyled
        bgColor={lightColors.subNav}
        fullWidth
        activeIndex={getActiveIndex(location.pathname)}
        scale="md"
        variant="primary"
      >
        <ButtonMenuItem
          color="white"
          width="160px"
          height="72px"
          borderRadius="16px"
          style={{
            fontFamily: 'HK Grotesk',
            fontSize: 24,
            fontWeight: 600,
            fontStyle: 'normal',
            color: '#fff',
          }}
          id="swap-nav-link"
          to="/swap"
          as={Link}
        >
          {t('Swap')}
        </ButtonMenuItem>
        <ButtonMenuItem
          color="white"
          width="160px"
          height="72px"
          borderRadius="16px"
          style={{
            fontFamily: 'HK Grotesk',
            fontSize: 24,
            fontWeight: 600,
            fontStyle: 'normal',
            color: '#fff',
          }}
          id="pool-nav-link"
          to="/pool"
          as={Link}
        >
          {t('Liquidity')}
        </ButtonMenuItem>
      </ButtonMenuStyled>
    </StyledNav>
  )
}

export default Nav
