import React, { useState } from 'react'
import useTranslations from '../useTranslations'
import Navigation from '../Navigation'
import Languages from '../Languages'
import ButtonMenu from '../ButtonMenu'
import Logo from '../Logo'

import * as S from './styled'

const TitleAction = props => {
  const {
    phone,
    email,
    phoneNumber,
    emailAddress,
    contactAction,
  } = useTranslations()

  return (
    <S.Wrapper>
      <div>
        <S.TextWrapper>
          <S.Text>{phone}:</S.Text> <S.TextValue>{phoneNumber}</S.TextValue>
        </S.TextWrapper>
        <S.TextWrapper>
          <S.Text>{email}:</S.Text> <S.TextValue>{emailAddress}</S.TextValue>
        </S.TextWrapper>
      </div>
      <S.Button>{contactAction}</S.Button>
    </S.Wrapper>
  )
}

export default TitleAction
