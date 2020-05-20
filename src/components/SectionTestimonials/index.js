import React from 'react'
import Marquee from 'react-marquee-slider'
import times from 'lodash.times'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const SectionTestimonial = () => {
  const { rawData } = useStaticQuery(query)
  const testimonials = rawData.edges.map((item, index) => {
    return {
      author: item.node.frontmatter.author,
      company: item.node.frontmatter.company,
      body: item.node.html,
      id: index
    }
  })
  const scale = 1
  console.log(testimonials)
  return (
    <S.Wrapper>
      <S.FullWidth>
        <S.Height height={400}>
          <Marquee
            key='1'
            velocity={20}
          // scatterRandomly
          // minScale={0.7}
          >
            {/* {testimonials.map((testimonial, index) => ( */}
            {times(testimonials.length, Number).map(id => (
              <S.Testimonial key={id} scale={scale} offset='true'>
                <S.Author>{testimonials[id].author}</S.Author>
                <S.Company>{testimonials[id].company}</S.Company>
                <S.Body dangerouslySetInnerHTML={{ __html: testimonials[id].body }} />
              </S.Testimonial>
            ))}
          </Marquee>
        </S.Height>
      </S.FullWidth>
    </S.Wrapper>
  )
}

export default SectionTestimonial

const query = graphql`
  query {
    rawData: allMarkdownRemark(filter: { fileAbsolutePath:{regex: "/(testimonials)/"  } }) {
      edges {
        node {
          frontmatter{
            author
            company
          }
          html
        }
      }
    }
  }
`
