import React, { useState } from 'react'
import useTranslations from '../useTranslations'
import Navigation from './Navigation'
import Languages from './Languages'
import Logo from './Logo'
import ButtonMenu from './ButtonMenu'
import OverlayMenu from './OverlayMenu'

import * as S from './styled'

const Header = () => {
  const { home } = useTranslations()
  const [toggleMenu, setToggleMenu] = useState(false)

  function handleToggleMenu () {
    setToggleMenu(!toggleMenu)
  }

  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.LogoLink to='/' title={home} aria-label={home}>
          <Logo />
        </S.LogoLink>
        <S.NavMenu>
          <Navigation isActive={toggleMenu} />
        </S.NavMenu>
        <S.NavLanguages className={toggleMenu ? 'active' : ''}>
          <Languages isActive={toggleMenu} />
        </S.NavLanguages>
        <ButtonMenu handleClick={handleToggleMenu} isActive={toggleMenu} />
        <OverlayMenu toggleMenu={handleToggleMenu} isActive={toggleMenu} />
      </S.Container>
      {/* <noscript><img src='https://analytics.newtelco.dev/ingress/7b6297e9-5457-450d-b09e-227f09babeea/pixel.gif' /></noscript> */}
      {/* <script src='https://analytics.newtelco.dev/ingress/7b6297e9-5457-450d-b09e-227f09babeea/script.js'></script> */}
    </S.HeaderWrapper>
  )
}

export default Header
