import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.defiy,
    earningToken: tokens.busd,
    contractAddress: {
      97: '',
      56: '0x8BB41938ec1A9Ace3E535812E8d561270449bcce',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1',
  }
]

export default pools
