import { MenuEntry } from '@defifarms/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    items: [
      {
        label: t('Special Pools'),
        href: '/special-pools',
      },
      {
        label: t('Classic Pools'),
        href: '/pools',
      },
    ],
  },
  // {
  //   label: t('Prediction (BETA)'),
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  // },
  // {
  //   label: t('Lottery'),
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  //   status: {
  //     text: t('Win').toLocaleUpperCase(),
  //     color: 'success',
  //   },
  // },
  // {
  //   label: t('Collectibles'),
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: t('Team Battle'),
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: t('Teams & Profile'),
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       label: t('Task Center'),
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: t('Your Profile'),
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: t('Info'),
  //   icon: 'InfoIcon',
  //   href: 'https://pancakeswap.info',
  // },
  // {
  //   label: t('IFO'),
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: t('More'),
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: t('Contact'),
  //       href: 'https://docs.pancakeswap.finance/contact-us',
  //     },
  //     {
  //       label: t('Voting'),
  //       href: '/voting',
  //     },
  //     {
  //       label: t('Github'),
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: t('Docs'),
  //       href: 'https://docs.pancakeswap.finance',
  //     },
  //     {
  //       label: t('Blog'),
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //     {
  //       label: t('Merch'),
  //       href: 'https://pancakeswap.creator-spring.com/',
  //     },
  //   ],
  // },
  {
    label: t('More'),
    icon: 'MoreIcon',
    initialOpenState: true,
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.defifarms.org/contact-us',
      },
      {
        label: t('Docs'),
        href: 'https://docs.defifarms.org/',
      },
      // {
      //   label: t('Docs'),
      //   href: 'https://docs.defifarms.org/',
      // },
      {
        label: 'Github',
        href: 'https://github.com/defifarms',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@DefiFarmsNFTs',
      },
      {
        label: 'Audited by',
        href: 'https://callisto.network/defifarms-protocol-security-audit/',
      },
    ],
  },
]

export default config
