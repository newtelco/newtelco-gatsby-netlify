import React, { useState } from 'react'
import useTranslations from '../useTranslations'
import Navigation from '../Navigation'
import Languages from '../Languages'
import ButtonMenu from '../ButtonMenu'
import Logo from '../Logo'

import * as S from './styled'

const Section = props => {
  const { home } = useTranslations()

  return (
    <S.Wrapper>
      {props.children}
      {/* <S.LogoLink to="/" title={home} aria-label={home}>
          <Logo />
        </S.LogoLink>

        <S.NavLanguages>
          <Languages />
        </S.NavLanguages>

        <ButtonMenu handleClick={handleToggleMenu} isActive={toggleMenu} />
        <S.NavMenu>
          <Navigation
            isActive={toggleMenu}
            handleToggleMenu={handleToggleMenu}
          />
        </S.NavMenu>
      </S.Container> */}
    </S.Wrapper>
  )
}

export default Section
