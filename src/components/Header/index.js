import React, { useState } from 'react'
import useTranslations from '../useTranslations'
import Navigation from '../Navigation'
import Languages from '../Languages'
import Logo from '../Logo'
import ButtonMenu from '../ButtonMenu'

import * as S from './styled'

const Header = () => {
  const { home } = useTranslations()
  const [toggleMenu, setToggleMenu] = useState(false)

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu)
  }

  return (
    <S.HeaderWrapper>
      <S.Container className={toggleMenu ? 'active' : ''}>
        <S.LogoLink to="/" title={home} aria-label={home}>
          <Logo />
        </S.LogoLink>

        <S.NavMenu className={toggleMenu ? 'active' : ''}>
          <Navigation isActive={toggleMenu} />
        </S.NavMenu>

        <S.NavLanguages className={toggleMenu ? 'active' : ''}>
          <Languages isActive={toggleMenu} />
        </S.NavLanguages>

        <ButtonMenu handleClick={handleToggleMenu} isActive={toggleMenu} />
      </S.Container>
    </S.HeaderWrapper>
  )
}

export default Header
