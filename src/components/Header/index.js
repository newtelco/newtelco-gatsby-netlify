import React, { useState } from 'react'
import useTranslations from '../useTranslations'
import Navigation from '../Navigation'
import Languages from '../Languages'
import Logo from '../Logo'

import * as S from './styled'

const Header = () => {
  const { home } = useTranslations()
  const [toggleMenu, setToggleMenu] = useState(false)

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu)
  }

  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.LogoLink to="/" title={home} aria-label={home}>
          <Logo />
        </S.LogoLink>

        <S.NavMenu>
          <Navigation
            isActive={toggleMenu}
            handleToggleMenu={handleToggleMenu}
          />
        </S.NavMenu>

        <S.NavLanguages>
          <Languages />
        </S.NavLanguages>
      </S.Container>
    </S.HeaderWrapper>
  )
}

export default Header
