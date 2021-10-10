import tokens from './tokens'
import { Farm } from '../../state/types'

const farms: Farm[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'DEFIY',
    lpAddresses: {
      97: '0x5017AE3D04e29B67b33CF96a86980717A773a783', // DEFI
      56: '',
    },
    token: tokens.defiy,
    quoteToken: tokens.busd,
    apr: 100,
  },
  {
    pid: 1,
    lpSymbol: 'DEFIY-BNB LP',
    lpAddresses: {
      97: '0xf5cae1131ff6004f4091543b08e6264c73b703df',
      56: '',
    },
    token: tokens.defiy,
    quoteToken: tokens.wbnb,
    apr: 100,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0xc1a3d5db7612d76330b6392b6caf0eaeba098a1b',
      56: '',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
    apr: 100,
  },
  {
    pid: 9,
    lpSymbol: 'DEFIY-BUSD LP',
    lpAddresses: {
      97: '0xeb16c25a892a0560daa3fb54038eeea2466862fe',
      56: '',
    },
    token: tokens.defiy,
    quoteToken: tokens.busd,
    apr: 100,
  },
  {
    pid: 10,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '0x64582A23B9578b44D3F0b79774310118BF5fF697',
      56: '',
    },
    token: tokens.btcb,
    quoteToken: tokens.wbnb,
    apr: 100,
  },
  {
    pid: 11,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0xc1ebdfe8799ffd3b738ea2604e5454b7b842ade6',
      56: '',
    },
    token: tokens.eth,
    quoteToken: tokens.wbnb,
    apr: 100,
  },
  {
    pid: 12,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '0x5f18cd1ca1404b2423f9d47421edde7cd7ed46e9',
      56: '',
    },
    token: tokens.dot,
    quoteToken: tokens.wbnb,
    apr: 100,
  },
  {
    pid: 13,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '0x0ee496078419fcb2cb62e2361de23211ddaf2606',
      56: '',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
    apr: 100,
  },
  {
    pid: 14,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x0d6a868760f45c44ce72b47030bdb9bf37409f50',
      56: '',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
    apr: 100,
  },
  {
    pid: 15,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '0x33ea4caf264e12ed2bc92119c6cd111ed3727894',
      56: '',
    },
    token: tokens.usdc,
    quoteToken: tokens.busd,
    apr: 100,
  },
]

export default farms
