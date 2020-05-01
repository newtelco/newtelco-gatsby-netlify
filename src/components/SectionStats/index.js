import React from 'react'
import { useInView } from 'react-intersection-observer'
import datacenter from '../../images/servers.png'
import StatBlock from '../StatBlock'
import useTranslations from '../useTranslations'

import * as S from './styled'

const SectionStats = props => {
  const { racks, datacenters, watts, tbps } = useTranslations()

  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <S.Wrapper>
      <S.SvgImage></S.SvgImage>
      <S.ContentWrapper>
        <S.Datacenter
          src={datacenter}
          alt="datacenter"
          className={inView ? 'imageInView' : ''}
          loading="lazy"
        />
        <S.Content ref={ref}>
          <StatBlock inView={inView} label={racks} value={457} />
          <StatBlock inView={inView} label={datacenters} value={26} />
          <StatBlock inView={inView} label={watts} value={1340} />
          <StatBlock inView={inView} label={tbps} value={3.5} />
        </S.Content>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default SectionStats
