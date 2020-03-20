import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import useTranslations from '../components/useTranslations'

const Content = styled.div`
  position: relative;
`

const Legal = props => {
  const { legalNotice } = useTranslations()
  // const items = props.data.allMarkdownRemark.edges
  // const page = props.data.markdownRemark
  // const title = props.pageContext.title

  console.log(props)

  return (
    <>
      <SEO title="Legal Notice" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '50px'
        }}
      >
        <h1
          style={{
            fontSize: '3rem'
          }}
        >
          {legalNotice}
        </h1>
        <Content
          dangerouslySetInnerHTML={{
            __html: props.data.allMarkdownRemark.edges[0].node.html
          }}
        ></Content>
      </div>
    </>
  )
}

export const query = graphql`
  query Misc($locale: String!, $title: String!) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        frontmatter: { title: { eq: $title } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            image
            short
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`

export default Legal
