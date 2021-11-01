import styled from 'styled-components'

export const MainBackground = styled.div`
  background-image: url(images/home/main-background.png);
  background-size: cover;
  background-color: rgba(0, 0, 0, ${({ theme }) => (theme.isDark ? '0.45' : '0.0')});
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: top center;
  height: calc(100vh - 88px); // Subtract header height
  overflow-y: scroll;
`
