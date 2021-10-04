import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
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
  },
]

export default farms
