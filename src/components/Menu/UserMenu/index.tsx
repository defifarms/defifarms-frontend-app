import React from 'react'
import { useWeb3React } from '@web3-react/core'
import {
  Flex,
  LogoutIcon,
  useMatchBreakpoints,
  useModal,
  UserMenu as UIKitUserMenu,
  UserMenuDivider,
  UserMenuItem,
  // ThemeSwitcher,
} from '@defifarms/uikit'
import styled from 'styled-components'
import useAuth from 'hooks/useAuth'
import useTheme from 'hooks/useTheme'
import ConnectWalletButton from 'components/ConnectWalletButton'
import ThemeToggle from 'components/ThemeToggle'
import { FetchStatus, useGetBnbBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import WalletModal, { LOW_BNB_BALANCE, WalletView } from './WalletModal'
import WalletUserMenuItem from './WalletUserMenuItem'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  right: 0;
`

const Image = styled.img`
  padding-top: 15px;
  height: 120px;
  width: calc(100vw - 243px);
`

const MenuWrapper = styled.div`
  position: absolute;
  right: 16px;
`


const UserMenu = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const { balance, fetchStatus } = useGetBnbBalance()
  const [onPresentWalletModal] = useModal(<WalletModal initialView={WalletView.WALLET_INFO} />)
  const [onPresentTransactionModal] = useModal(<WalletModal initialView={WalletView.TRANSACTIONS} />)
  const avatarSrc = undefined
  const hasLowBnbBalance = fetchStatus === FetchStatus.SUCCESS && balance.lte(LOW_BNB_BALANCE)
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl
  return (
    <Wrapper>
      {!isMobile && <Image alt="alt" src="/images/header.png" />}
      {account ? (
        <MenuWrapper>
          <UIKitUserMenu account={account} avatarSrc={avatarSrc}>
            <WalletUserMenuItem hasLowBnbBalance={hasLowBnbBalance} onPresentWalletModal={onPresentWalletModal} />
            <UserMenuItem as="button" onClick={onPresentTransactionModal}>
              {t('Transactions')}
            </UserMenuItem>
            <UserMenuDivider />
            <UserMenuItem as="button" onClick={logout}>
              <Flex alignItems="center" justifyContent="space-between" width="100%">
                {t('Disconnect')}
                <LogoutIcon />
              </Flex>
            </UserMenuItem>
          </UIKitUserMenu>
        </MenuWrapper>
      ) : (
        <MenuWrapper>
          <ConnectWalletButton scale={isMobile ? 'xs' : 'sm'} ml="24px" />
        </MenuWrapper>
        
      )}
    </Wrapper>
  )
}

export default UserMenu
