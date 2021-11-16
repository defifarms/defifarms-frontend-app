import styled from 'styled-components'

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    min-width: 280px;
    width: 100%;
    margin: 0 8px;
    margin-bottom: 32px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > * {
      min-width: 370px;
      max-width: 35.5%;
    }
  }
`

export default FlexLayout
