import React, { useState } from 'react'
import useTranslations from '../useTranslations'
import Navigation from '../Navigation'
import Languages from '../Languages'
import ButtonMenu from '../ButtonMenu'
import Logo from '../Logo'

import * as S from './styled'

const TitleAction = props => {
  const { contact, contactAction } = useTranslations()

  return (
    <S.Wrapper>
      <S.Text>{contact}</S.Text>
      <S.Button>{contactAction}</S.Button>
    </S.Wrapper>
  )
}

export default TitleAction
