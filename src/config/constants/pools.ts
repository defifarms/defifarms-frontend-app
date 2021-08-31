import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 212,
    stakingToken: tokens.cake,
    earningToken: tokens.bel,
    contractAddress: {
      97: '',
      56: '0x52733Ad7b4D09BF613b0389045e33E2F287afa04',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.101',
  },
  {
    sousId: 211,
    stakingToken: tokens.cake,
    earningToken: tokens.ramp,
    contractAddress: {
      97: '',
      56: '0x401b9b97bdbc3197c1adfab9652dc78040bd1e13',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.9837',
  },
  {
    sousId: 7,
    stakingToken: tokens.cake,
    earningToken: tokens.inj,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 999,
    isFinished: true,
  },
]

export default pools
