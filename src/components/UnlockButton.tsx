import React from 'react'
import styled from 'styled-components'
import { Button, useWalletModal } from '@defifarms/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const StyledButtonMenu = styled(Button)`
  font-weight: 600;
  font-size: 32.9627px;
  line-height: 45px;
  height: 80px;
`

const UnlockButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <StyledButtonMenu onClick={onPresentConnectModal} {...props}>
      {t('Unlock Wallet')}
    </StyledButtonMenu>
  )
}

export default UnlockButton
