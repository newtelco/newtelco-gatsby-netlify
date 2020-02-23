import React from 'react'
import Map from '../Map'
import TitleAction from '../TitleAction'
import ScrollIndicator from '../ScrollIndicator'
import { useInView } from 'react-intersection-observer'

import * as S from './styled'

const TitlePage = props => {
  const { text, subtitle } = props

  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    rootMargin: '-75% 0px 0px 0px',
  })

  return (
    <S.TitleWrapper>
      <Map />
      <S.TitleElement>{text}</S.TitleElement>
      <S.TitleSubElement>{subtitle}</S.TitleSubElement>
      <TitleAction />
      <ScrollIndicator visible={inView} ref={ref} />
    </S.TitleWrapper>
  )
}

export default TitlePage
