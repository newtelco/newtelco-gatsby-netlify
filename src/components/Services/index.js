import React, { useState } from 'react'
import Service from './service'

import * as S from './styled.js'

const Services = props => {
  console.log(props)
  return (
    <S.Wrapper>
      {props.items.map((service, index) => {
        const indexNr = index + 2
        return (
          <React.Fragment key={service.node.frontmatter.title}>
            <Service service={service} indexNr={indexNr} />
          </React.Fragment>
        )
      })}
    </S.Wrapper>
  )
}

export default Services
