import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'
import HKGrotesk from "../fonts/HKGrotesk-Medium.otf";
import HKGroteskBold from "../fonts/HKGrotesk-Bold.otf";
import HKGroteskLight from "../fonts/HKGrotesk-Light.otf";

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

declare module "*.otf"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: HK Grotesk;
    src: url(${HKGrotesk});
  }

  @font-face {
    font-family: HK Grotesk Bold;
    src: url(${HKGroteskBold});
  }

  @font-face {
    font-family: HK Grotesk Light;
    src: url(${HKGroteskLight});
  }
  * {
    font-family: 'Poppins', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.primary};
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
  .slick-prev, .slick-next {
    background-image: url(/images/home/arrow.png);
    width: 31px;
    height: 31px;
    ::before {
      content: '';
    }
    :hover {
      background: url(/images/home/arrow.png);
    }
  }
  .slick-next {
    transform: rotate(180deg);
  }
  @media screen and (min-width: 576px) {
    .slick-prev, .slick-next {
      display: none;
    }
  }
  @media only screen and (max-width: 576px) {
    .slick-prev, .slick-next {
      display: none !important;
    }
}
`

export default GlobalStyle
