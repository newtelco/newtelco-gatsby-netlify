import React from 'react'
import { ArrowUp } from 'react-feather'

import * as S from './styled'

const ScrollTop = props => {
  const scrollTo = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <S.ScrollBtnWrapper className={props.inView ? 'in-view' : ''}>
      <S.ScrollBtn aria-label='Scroll to Top' onClick={scrollTo}>
        <ArrowUp color='#fff' size={32} strokeWidth={2} />
      </S.ScrollBtn>
    </S.ScrollBtnWrapper>
  )
}

export default ScrollTop
