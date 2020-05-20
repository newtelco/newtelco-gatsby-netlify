import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import useTranslations from '../components/useTranslations'
import { useInView } from 'react-intersection-observer'
import ScrollTop from '../components/ScrollTop'
import ProductsSection from '../components/ProductsSection'

// const Index = ({ data: { allMarkdownRemark } }) => {
const Index = () => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const { hello, subline, products, services, location } = useTranslations()

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0
  })

  return (
    <div className='homepage'>
      <SEO title='Products' />
      <div ref={ref}>
        <ProductsSection />
      </div>
      <ScrollTop inView={inView} />
    </div>
  )
}

export default Index

// export const query = graphql`
//   query ProductsIndex($locale: String!, $dateFormat: String!, ) {
//     allMarkdownRemark(
//       filter: {
//         fields: { locale: { eq: $locale } }
//         fileAbsolutePath: {regex: "/(products)\/.*\\.md$/"}
//       }
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: 2
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             description
//             category
//             background
//             image
//             date(formatString: $dateFormat)

//           }
//           timeToRead
//           fields {
//             locale
//             slug
//           }
//         }
//       }
//     }
//   }
// `
