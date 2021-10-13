import styled from 'styled-components'

export const MainBackground = styled.div`
  border-top-left-radius: ${({ theme }) => theme.radii.homeCorner};
  background-image: url(images/home/7.svg);
  background-size: cover;
  background-color: rgba(0, 0, 0, ${({ theme }) => (theme.isDark ? '0.45' : '0.1')});
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: bottom center;
  height: calc(100vh - 88px); // Subtract header height
  overflow: scroll;
`