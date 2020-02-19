import { useStaticQuery, graphql } from 'gatsby'
export const useSection = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SectionContent {
        allMarkdownRemark(
          filter: { frontmatter: { category: { eq: "section" } } }
        ) {
          edges {
            node {
              frontmatter {
                category
                title
                description
                image
              }
              fields {
                locale
              }
              html
              parent {
                ... on File {
                  base
                  sourceInstanceName
                }
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}
