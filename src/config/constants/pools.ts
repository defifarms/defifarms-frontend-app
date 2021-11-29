import tokens from './tokens'
import {SerializedPoolConfig, PoolCategory} from './types'
import {serializeTokens} from './tokensV1'

const serializedTokens = serializeTokens()
const pools: SerializedPoolConfig[] = [
  // {
  //   sousId: 3,
  //   stakingToken: tokens.busd,
  //   earningToken: tokens.defiy,
  //   contractAddress: {
  //     97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
  //     56: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   depositFeeBP: '0',
  //   harvestInterval: '14400',
  //   tokenPerBlock: '0.01',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
  // {
  //   sousId: 4,
  //   apr: 100,
  //   stakingToken: tokens.defiy,
  //   earningToken: tokens.defiy,
  //   contractAddress: {
  //     97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
  //     56: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   depositFeeBP: '0',
  //   harvestInterval: '14400',
  //   tokenPerBlock: '0.01',
  //   sortOrder: 2,
  //   isFinished: false,
  // },
  {
    sousId: 236,
    stakingToken: serializedTokens.defiy,
    earningToken: serializedTokens.defiy,
    contractAddress: {
      97: '0x417d2fe6cf2208036233eb07cae183d6aa623672',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0578',
  },
  // {
  //   sousId: 5,
  //   apr: 100,
  //   stakingToken: tokens.wbnb,
  //   earningToken: tokens.defiy,
  //   contractAddress: {
  //     97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
  //     56: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   depositFeeBP: '0',
  //   harvestInterval: '14400',
  //   tokenPerBlock: '0.01',
  //   sortOrder: 2,
  //   isFinished: false,
  // },
  // {
  //   sousId: 6,
  //   apr: 100,
  //   stakingToken: tokens.btcb,
  //   earningToken: tokens.defiy,
  //   contractAddress: {
  //     97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
  //     56: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   depositFeeBP: '0',
  //   harvestInterval: '14400',
  //   tokenPerBlock: '0.01',
  //   sortOrder: 2,
  //   isFinished: false,
  // },
  // {
  //   sousId: 7,
  //   apr: 100,
  //   stakingToken: tokens.eth,
  //   earningToken: tokens.defiy,
  //   contractAddress: {
  //     97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
  //     56: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   depositFeeBP: '0',
  //   harvestInterval: '14400',
  //   tokenPerBlock: '0.01',
  //   sortOrder: 2,
  //   isFinished: false,
  // },
  // {
  //   sousId: 8,
  //   apr: 100,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.defiy,
  //   contractAddress: {
  //     97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
  //     56: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   depositFeeBP: '0',
  //   harvestInterval: '14400',
  //   tokenPerBlock: '0.01',
  //   sortOrder: 2,
  //   isFinished: false,
  // },
]

export default pools
