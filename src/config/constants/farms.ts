import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'DEFI',
    lpAddresses: {
      97: '0x2BFCDE20E955C6ec3A05c4c25908F10824732e98', // DEFI
      56: '0x08d1Ed0e3816183e703a492dDD28d68fcc13bb61',
    },
    token: tokens.defiy,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'DEFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.defiy,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
