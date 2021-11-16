import React from 'react'
import styled from 'styled-components'
import { Button } from '@defifarms/uikit'

interface PercentageButtonProps {
  onClick: () => void
}

const StyledButton = styled(Button)`
  flex-grow: 1;
  background-color: #450daa;
  font-size: 16px;
`

const PercentageButton: React.FC<PercentageButtonProps> = ({ children, onClick }) => {
  return (
    <StyledButton scale="xs" mx="4px" p="16px 24px" variant="tertiary" onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default PercentageButton
