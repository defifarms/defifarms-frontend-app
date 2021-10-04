import tokens from './tokens'
import { PoolCategory, PoolConfig } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 3,
    stakingToken: tokens.busd,
    earningToken: tokens.defiy,
    contractAddress: {
      97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
