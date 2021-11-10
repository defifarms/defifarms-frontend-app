import styled, { css, keyframes } from 'styled-components'
import { Box, Card } from '@pancakeswap/uikit'

const PromotedGradient = keyframes`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`

interface PromotedStyleCardProps {
  isDesktop: boolean
}

export const StyledCard = styled(Card)<{ isPromoted?: PromotedStyleCardProps; isFinished?: boolean }>`
  margin: 0 16px 24px;
  display: flex;
  flex-direction: column;
  align-self: baseline;
  position: relative;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'secondary']};
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
  background: ${(props) => props.theme.card.backgroundCardTransparent};

  ${({ isPromoted }) =>
    isPromoted &&
    isPromoted.isDesktop &&
    css`
      animation: ${PromotedGradient} 3s ease infinite;
    `}

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 12px 46px;
    max-width: 35.5%;
  }
`

export const StyledCardInner = styled(Box)`
  border-radius: ${({ theme }) => theme.radii.card};
  backdrop-filter: blur(5px);
`

export default StyledCard
