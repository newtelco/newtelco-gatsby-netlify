import React from 'react'
import Fade from 'react-reveal/Fade'

import * as S from './styled'

const SectionItem = props => {
  const section = props.item.parent.sourceInstanceName
  const item = props.item.fields.slug
  const locale = props.item.fields.locale
  const url = locale === 'en' ? `${section}/${item}` : `/${section}/${item}`

  const indexNr = props.index + 2
  console.log(item, indexNr, indexNr % 2)
  return (
    <S.Wrapper>
      <Fade big left={indexNr % 2 === 0} right={indexNr % 2 === 1}>
        <S.HeaderImg src={props.item.frontmatter.image} />
      </Fade>
      <S.SectionTextWrapper>
        <S.Header>{props.item.frontmatter.title}</S.Header>
        <S.Content>
          <div
            dangerouslySetInnerHTML={{ __html: props.item.frontmatter.short }}
          ></div>
        </S.Content>
      </S.SectionTextWrapper>
    </S.Wrapper>
  )
}

export default SectionItem
