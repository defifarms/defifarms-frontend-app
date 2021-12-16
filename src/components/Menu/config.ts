import { MenuEntry } from '@defifarms/uikit'
import { ContextApi } from 'contexts/Localization/types'

const url = process.env.REACT_APP_HOST_1
const specialUrl = process.env.REACT_APP_HOST_2

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
        label: t('Classic Pools'),
        href: '/pools',
      },
      {
        label: t('Special Pools'),
        href: 'https://spool.defifarms.org/',
      },
    ],
  },
  {
    label: t('Rocket'),
    icon: 'PredictionsIcon',
    href: '#',
    status: {
      text: "Comming soon",
      color: "warning",
    }
  },
  {
    label: t('NFT'),
    icon: 'NftIcon',
    href: '#',
    status: {
      text: "Comming soon",
      color: "warning",
    }
  },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '#',
    status: {
      text: "Comming soon",
      color: "warning",
    }
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    initialOpenState: true,
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.defifarms.org/contact-us',
        target:"_blank"
      },
      {
        label: t('Docs'),
        href: 'https://docs.defifarms.org/',
        target:"_blank"
      },
      {
        label: 'Github',
        href: 'https://github.com/defifarms',
        target:"_blank"
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@DefiFarmsNFTs',
        target:"_blank"
      },
      {
        label: 'Audited by',
        href: 'https://callisto.network/defifarms-protocol-security-audit/',
        target:"_blank"
      },
    ],
  },
]

export default config
