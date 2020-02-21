import React from 'react'

import * as S from './styled'

const SectionItem = props => {
  const section = props.item.parent.sourceInstanceName
  const item = props.item.fields.slug
  const locale = props.item.fields.locale
  const url = locale === 'en' ? `${section}/${item}` : `/${section}/${item}`

  return (
    <S.Wrapper>
      <S.HeaderImg src={props.item.frontmatter.image} />
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
