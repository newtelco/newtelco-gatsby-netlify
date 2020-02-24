import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import ProductsSection from '../components/ProductsSection'

import * as S from '../components/Content/styled'

const Page = props => {
  const items = props.data.allMarkdownRemark.edges
  const page = props.data.markdownRemark

  console.log(items)
  return (
    <>
      <SEO title={props.pathContext.title} />
      <S.Content>
        {/* <div dangerouslySetInnerHTML={{ __html: page.html }}></div> */}
        {props.pageContext.title === 'products' && (
          <ProductsSection items={items} />
        )}
      </S.Content>
    </>
  )
}

export const query = graphql`
  query Page($locale: String!, $title: String!) {
    allMarkdownRemark(
      filter: { fields: { locale: { eq: $locale }, section: { eq: $title } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            image
          }
          html
        }
      }
    }
    markdownRemark(fields: { locale: { eq: "en" }, slug: { eq: "products" } }) {
      frontmatter {
        title
        description
        image
      }
      html
    }
  }
`

export default Page
