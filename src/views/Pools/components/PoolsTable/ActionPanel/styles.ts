import styled from 'styled-components'

export const ActionContainer = styled.div<{isAutoVault?: boolean}>`
  padding: 24px 16px;
  border: 1px solid #5503e8;
  border-radius: 16px;
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 16px;
  margin-top: 16px;

  ${({theme}) => theme.mediaQueries.sm} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 0;
    height: 130px;
    max-height: 140px;
  }

  ${({theme}) => theme.mediaQueries.xl} {
    margin-left: 32px;
    margin-right: 0;
    margin-bottom: 0;
    height: 130px;
    max-height: 140px;
  }
`

export const ActionTitles = styled.div`
  font-weight: 600;
  font-size: 12px;
`

export const ActionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
