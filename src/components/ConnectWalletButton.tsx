import React from 'react'
import styled from 'styled-components'
import { Button, useWalletModal } from '@defifarms/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const StyledButtonMenu = styled(Button)`
  background: #3230B2;
`

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <StyledButtonMenu variant="four" onClick={onPresentConnectModal} {...props}>
      {t('Connect Wallet')}
    </StyledButtonMenu>
  )
}

export default ConnectWalletButton
