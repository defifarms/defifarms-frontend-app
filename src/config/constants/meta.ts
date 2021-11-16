import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'DefiFarms',
  description:
    'The most popular AMM on BSC by user count! Earn Defiy through yield farming or win it in the Lottery, then stake it in Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by DefiFarms), NFTs, and more, on a platform you can trust.',
  image: 'https://app.defifarms.org/images/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('DefiFarms')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('DefiFarms')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('DefiFarms')}`,
      }
    default:
      return null
  }
}
