import React from 'react'
import { LocaleContext } from '../Layout'
import LocalizedLink from '../LocalizedLink'
import { useInView } from 'react-intersection-observer'
// import datacenter from '../../images/datacenter.svg'
import datacenter from '../../images/servers.png'
import StatBlock from '../StatBlock'
import useTranslations from '../useTranslations'

import * as S from './styled'

const SectionStats = props => {
  const { racks, customers, watts, tbps } = useTranslations()

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <S.Wrapper>
      <S.SvgImage></S.SvgImage>
      <S.ContentWrapper>
        <S.Datacenter
          src={datacenter}
          alt="datacenter"
          className={inView ? 'imageInView' : ''}
        />
        <S.Content ref={ref}>
          <StatBlock inView={inView} label="Racks" value={457} />
          <StatBlock inView={inView} label="Customers" value={120} />
          <StatBlock inView={inView} label="Watts" value={13040} />
          <StatBlock inView={inView} label="Tbps" value={3.5} />
        </S.Content>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default SectionStats
