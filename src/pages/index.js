import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import TitlePage from '../components/TitlePage'
import useTranslations from '../components/useTranslations'
import SectionCategory from '../components/SectionCategory'
import SectionLocation from '../components/SectionLocation'
import SectionStats from '../components/SectionStats'
import { useInView } from 'react-intersection-observer'
import ScrollTop from '../components/ScrollTop'
import Smallchat from '../components/SmallChat'

const Index = () => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const { hello, subline, products, services, location } = useTranslations()
  const [chatVisible, setChatVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setChatVisible(true)
    }, 3000)
  }, [])

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0
  })
  return (
    <div className="homepage">
      <SEO title="Home" />
      <TitlePage text={hello} subtitle={subline} />
      <SectionStats />
      <div ref={ref}>
        <SectionCategory title={products}></SectionCategory>
        <SectionCategory title={services}></SectionCategory>
        <SectionLocation title={location}></SectionLocation>
      </div>
      <ScrollTop inView={inView} />
      {chatVisible && <Smallchat />}
    </div>
  )
}

export default Index

// export const query = graphql`
//   query Index($locale: String!, $dateFormat: String!, ) {
//     allMarkdownRemark(
//       filter: {
//         fields: { locale: { eq: $locale } }
//         fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
//       }
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: 2
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             category
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
