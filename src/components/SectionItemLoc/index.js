import React, { useState } from 'react'
import useTranslations from '../useTranslations'
import { useStaticQuery, graphql } from 'gatsby'
import { LocaleContext } from '../Layout'
import LocalizedLink from '../LocalizedLink'

import * as S from './styled'

const SectionItemLoc = props => {
  const { home } = useTranslations()

  const section = props.item.parent.sourceInstanceName
  const item = props.item.fields.slug
  const locale = props.item.fields.locale
  const url = locale === 'en' ? `${section}/${item}` : `/${section}/${item}`

  return (
    <S.Wrapper>
      <S.HeaderImg src={props.item.frontmatter.image} />
      <S.Header>{props.item.frontmatter.title}</S.Header>
      <S.Content>
        <div
          dangerouslySetInnerHTML={{ __html: props.item.frontmatter.short }}
        ></div>
      </S.Content>
    </S.Wrapper>
  )
}

export default SectionItemLoc
