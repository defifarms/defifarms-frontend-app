import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, lightColors } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledNav = styled.nav`
  margin-bottom: 40px;
`

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
      <ButtonMenu
        bgColor={lightColors.subNav}
        fullWidth
        borderRadius="20px"
        activeIndex={getActiveIndex(location.pathname)}
        scale="md"
        variant="primary"
      >
        <ButtonMenuItem width="160px" height="72px" borderRadius="20px" id="swap-nav-link" to="/swap" as={Link}>
          {t('Swap')}
        </ButtonMenuItem>
        <ButtonMenuItem width="160px" height="72px" borderRadius="20px" id="pool-nav-link" to="/pool" as={Link}>
          {t('Liquidity')}
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
