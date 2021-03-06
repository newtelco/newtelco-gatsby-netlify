import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Products from '../components/Products'
import Services from '../components/Services'
import Team from '../components/Team'
import Contact from '../components/Contact'
import About from '../components/About'

import * as S from '../components/Content/styled'

const Page = props => {
  const items = props.data.allMarkdownRemark.edges
  const title = props.pageContext.title
  console.log(props)

  return (
    <>
      <SEO title={title.charAt(0).toUpperCase() + title.substring(1)} />
      <S.Content>
        {props.pageContext.title === 'Products' && <Products items={items} />}
        {props.pageContext.title === 'Services' && <Services items={items} />}
        {props.pageContext.title === 'Team' && <Team items={items} />}
        {props.pageContext.title === 'Contact' && <Contact items={items} />}
        {props.pageContext.title === 'About' && <About items={items} />}
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
            image
            short
          }
          fields {
            slug
            section
          }
          html
        }
      }
    }
    markdownRemark(fields: { locale: { eq: "en" }, slug: { eq: "Products" } }) {
      frontmatter {
        title
        image
      }
      html
    }
  }
`

export default Page
