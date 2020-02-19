import React, { useState } from 'react'
import useTranslations from '../useTranslations'
import { useStaticQuery, graphql } from 'gatsby'
import { LocaleContext } from '../Layout'

import * as S from './styled'

const SectionItem = props => {
  const { home } = useTranslations()

  return (
    <S.Wrapper>
      <S.HeaderImg src={props.item.frontmatter.image} />
      <S.Header>{props.item.frontmatter.title}</S.Header>
      <S.Content>
        <div dangerouslySetInnerHTML={{ __html: props.item.html }}></div>
      </S.Content>
    </S.Wrapper>
  )
}

export default SectionItem
