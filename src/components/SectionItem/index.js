import React from 'react'

import * as S from './styled'

const SectionItem = props => {
  const section = props.item.parent.sourceInstanceName
  const item = props.item.fields.slug
  const locale = props.item.fields.locale
  const url = locale === 'en' ? `${section}/${item}` : `/${section}/${item}`
  const indexNr = props.index + 2

  return (
    <S.Wrapper className={indexNr % 2 == 0 ? 'row' : 'rowReverse'}>
      <S.HeaderImg
        className={props.inView ? 'sectionInView imageWrapper' : 'imageWrapper'}
        id={indexNr % 2 == 0 ? 'right' : 'left'}
        src={props.item.frontmatter.image}
      />
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
