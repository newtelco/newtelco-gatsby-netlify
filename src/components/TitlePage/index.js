import React, { useEffect } from 'react'
import Map from './Map'
import TitleAction from './TitleAction'
import ScrollIndicator from './ScrollIndicator'
import { useInView } from 'react-intersection-observer'
import 'react-notifications/lib/notifications.css'
import useTranslations from '../useTranslations'
import { NotificationContainer, NotificationManager } from 'react-notifications'

import * as S from './styled'

const TitlePage = props => {
  const { text, subtitle } = props
  const { developmentNotice } = useTranslations()

  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    rootMargin: '-75% 0px 0px 0px'
  })

  useEffect(() => {
    setTimeout(() => {
      NotificationManager.info(developmentNotice, 'Development Version')
    }, 3000)
  }, [])

  return (
    <S.TitleWrapper>
      <Map />
      <S.TitleElement>{text}</S.TitleElement>
      <S.TitleSubElement>{subtitle}</S.TitleSubElement>
      <TitleAction />
      <ScrollIndicator visible={inView} ref={ref} />
      <NotificationContainer />
    </S.TitleWrapper>
  )
}

export default TitlePage
