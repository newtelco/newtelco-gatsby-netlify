import React from 'react'
import Map from '../Map'
import TitleAction from '../TitleAction'
import * as S from './styled'

const TitlePage = props => {
  const { text, subtitle } = props

  return (
    <S.TitleWrapper>
      <Map />
      <S.TitleElement>{text}</S.TitleElement>
      <S.TitleSubElement>{subtitle}</S.TitleSubElement>
      <TitleAction />
    </S.TitleWrapper>
  )
}

export default TitlePage
