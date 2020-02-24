import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

import * as S from '../components/Content/styled'

const SectionItem = props => {
  // const post = props.data.markdownRemark

  return (
    <>
      <SEO
      // title={post.frontmatter.title}
      // description={post.frontmatter.description}
      />
      <S.Content>
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }}></div> */}
        Section Item Template
      </S.Content>
    </>
  )
}

// export const query = graphql`
//   query SectionItem($locale: String!, $title: String!) {
//     markdownRemark(
//       frontmatter: { title: { eq: $title } }
//       fields: { locale: { eq: $locale } }
//     ) {
//       frontmatter {
//         title
//         description
//       }
//       html
//     }
//   }
// `

export default SectionItem
