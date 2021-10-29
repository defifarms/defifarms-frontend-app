import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    overflow: hidden;
    img {
      height: auto;
      max-width: 100%;
    }
  }

  .slick-dots li.slick-active button:before {
    color: #F9FAFD !important;
  }
  .slick-dots li button:before {
      font-size: 11px;
      opacity: 0.4;
      color: #F9FAFD;
  }
  .slick-dots li {
    margin: 0;
  }
`

export default GlobalStyle
