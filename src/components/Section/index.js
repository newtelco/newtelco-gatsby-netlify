import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { LocaleContext } from '../Layout'
import SectionItem from '../SectionItem'
import { useSection } from '../useSection'

import * as S from './styled'

const Section = props => {
  const { locale } = React.useContext(LocaleContext)
  const nodes = useSection()

  const { rawData } = useStaticQuery(query)
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.name,
      translations: item.node.translations,
    }
  })

  const translations = simplified.filter(lang => lang.name === locale)[0]

  const translationEntries = Object.entries(translations.translations).filter(
    entry => entry[1] === props.title
  )
  const localeName = translationEntries[0][0]

  const localeSectionItems = nodes.filter(
    edge => edge.node.fields.locale === locale
  )

  const localeCurrentSection = localeSectionItems.filter(
    edge => edge.node.parent.sourceInstanceName === localeName
  )

  return (
    <S.Wrapper>
      <S.Header>{props.title}</S.Header>
      <S.Content>
        {localeCurrentSection.map(item => {
          return (
            <SectionItem
              key={item.node.frontmatter.title}
              item={item.node}
              noAction={localeName === 'location'}
            />
          )
        })}
      </S.Content>
    </S.Wrapper>
  )
}

export default Section

const query = graphql`
  query getSectionNames {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            products
            services
            location
          }
        }
      }
    }
  }
`
