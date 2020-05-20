import React from 'react'
import * as S from './styled.js'
import { ArrowDown } from 'react-feather'

const ScrollIndicator = React.forwardRef((props, ref) => {
  return (
    <S.Wrapper ref={ref} className={props.visible ? '' : 'outOfView'}>
      <S.Container>
        <S.Animation>
          <ArrowDown color="#475060" />
        </S.Animation>
      </S.Container>
    </S.Wrapper>
  )
})

export default ScrollIndicator
