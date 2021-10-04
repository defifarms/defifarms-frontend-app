import tokens from './tokens'
import { PoolCategory, PoolConfig } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 3,
    stakingToken: tokens.busd,
    earningToken: tokens.defiy,
    contractAddress: {
      97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: tokens.defiy,
    earningToken: tokens.defiy,
    contractAddress: {
      97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 2,
    isFinished: false,
  },
  {
    sousId: 5,
    stakingToken: tokens.wbnb,
    earningToken: tokens.defiy,
    contractAddress: {
      97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 2,
    isFinished: false,
  },
  {
    sousId: 6,
    stakingToken: tokens.btcb,
    earningToken: tokens.defiy,
    contractAddress: {
      97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 2,
    isFinished: false,
  },
  {
    sousId: 7,
    stakingToken: tokens.eth,
    earningToken: tokens.defiy,
    contractAddress: {
      97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 2,
    isFinished: false,
  },
  {
    sousId: 8,
    stakingToken: tokens.cake,
    earningToken: tokens.defiy,
    contractAddress: {
      97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 2,
    isFinished: false,
  },
]

export default pools
