import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import TitlePage from '../components/TitlePage'
import LocalizedLink from '../components/LocalizedLink'
import useTranslations from '../components/useTranslations'
import styled from 'styled-components'
import * as S from '../components/ListWrapper/styled'
import Section from '../components/Section'

const Index = ({ data: { allMarkdownRemark } }) => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const { hello, subline, category, latestPosts, allPosts } = useTranslations()

  const postList = allMarkdownRemark.edges

  return (
    <div className="homepage">
      <SEO title="Home" />
      <TitlePage text={hello} subtitle={subline} />
      <Section>Products</Section>
      <Section>Services</Section>

      {/* <LocalizedLink to={`/blog/`}>{allPosts}</LocalizedLink> */}
    </div>
  )
}

export default Index

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!, ) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            category
            background
            image
            date(formatString: $dateFormat)

          }
          timeToRead
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`
