import React from 'react'
import CountUp from 'react-countup'

import * as S from './styled.js'

const StatBlock = React.forwardRef((props, ref) => {
  return (
    <S.Wrapper>
      <S.Value>
        {props.inView && (
          <CountUp
            start={0}
            end={props.value}
            duration={3.75}
            useEasing={true}
            decimals={props.value.toString().indexOf('.') !== -1 ? 1 : 0}
          />
        )}
      </S.Value>
      <S.Label>{props.label}</S.Label>
    </S.Wrapper>
  )
})

export default StatBlock
