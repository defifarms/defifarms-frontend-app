import React from 'react'
import { Menu as UikitMenu } from '@pancakeswap/uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import config from './config'
import UserMenu from './UserMenu'
import { usePriceCakeBusd } from '../../state/farms/hooks'

const Menu = (props) => {
  const { isDark } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const { currentLanguage, setLanguage, t } = useTranslation()

  return (
    <UikitMenu
      userMenu={<UserMenu />}
      isDark={isDark}
      toggleTheme={null}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      cakePriceUsd={cakePriceUsd.toNumber()}
      links={config(t)}
      profile={{
        username: null,
        image: undefined,
        profileLink: '',
        noProfileLink: '',
        showPip: null,
      }}
      {...props}
    />
  )
}

export default Menu
