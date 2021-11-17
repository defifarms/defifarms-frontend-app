import tokens from '../../config/constants/tokens'
import { PoolCategory, PoolConfig } from '../../config/constants/types'
import { Pool, SpecialPoolConfigType } from '../../state/types'

export const SpecialPoolsConfig: SpecialPoolConfigType[]  = [
    {
        name: 'DeFiFarms 30K',
        link: 'round-1',
        childrenPools: [
            {
                sousId: 3,
                apr: 100,
                stakingToken: tokens.busd,
                earningToken: tokens.defiy,
                contractAddress: {
                    97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
                    56: '',
                },
                poolCategory: PoolCategory.CORE,
                depositFeeBP: '0',
                harvestInterval: '14400',
                tokenPerBlock: '0.01',
                sortOrder: 1,
                isFinished: false,
            },
        ]
    },
    {
        name: 'DeFiFarms 50K',
        link: 'round-2',
        childrenPools: [
            {
                sousId: 3,
                apr: 100,
                stakingToken: tokens.busd,
                earningToken: tokens.defiy,
                contractAddress: {
                    97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
                    56: '',
                },
                poolCategory: PoolCategory.CORE,
                depositFeeBP: '0',
                harvestInterval: '14400',
                tokenPerBlock: '0.01',
                sortOrder: 1,
                isFinished: false,
            },
        ]
    },
    {
        name: 'DeFiFarms 100K',
        link: 'round-3',
        childrenPools: [
            {
                sousId: 3,
                apr: 100,
                stakingToken: tokens.busd,
                earningToken: tokens.defiy,
                contractAddress: {
                    97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
                    56: '',
                },
                poolCategory: PoolCategory.CORE,
                depositFeeBP: '0',
                harvestInterval: '14400',
                tokenPerBlock: '0.01',
                sortOrder: 1,
                isFinished: false,
            },
        ]
    },
    {
        name: 'DeFiFarms 500K',
        link: 'round-4',
        childrenPools: [
            {
                sousId: 3,
                apr: 100,
                stakingToken: tokens.busd,
                earningToken: tokens.defiy,
                contractAddress: {
                    97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
                    56: '',
                },
                poolCategory: PoolCategory.CORE,
                depositFeeBP: '0',
                harvestInterval: '14400',
                tokenPerBlock: '0.01',
                sortOrder: 1,
                isFinished: false,
            },
        ]
    },
    {
        name: 'DeFiFarms 1500K',
        link: 'round-5',
        childrenPools: [
            {
                sousId: 3,
                apr: 100,
                stakingToken: tokens.busd,
                earningToken: tokens.defiy,
                contractAddress: {
                    97: '0xc7437617f89A23FA7eACB90f6b3D663055B5d467',
                    56: '',
                },
                poolCategory: PoolCategory.CORE,
                depositFeeBP: '0',
                harvestInterval: '14400',
                tokenPerBlock: '0.01',
                sortOrder: 1,
                isFinished: false,
            },
        ]
    },
]