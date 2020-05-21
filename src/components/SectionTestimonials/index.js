import React from 'react'
import Marquee from 'react-marquee-slider'
import times from 'lodash.times'
import { useStaticQuery, graphql } from 'gatsby'
import { QuoteAltRight } from 'styled-icons/boxicons-solid/QuoteAltRight'
import * as S from './styled'

const SectionTestimonial = () => {
  const { rawData } = useStaticQuery(query)
  const testimonials = rawData.edges.map((item, index) => {
    return {
      author: item.node.frontmatter.author,
      company: item.node.frontmatter.company,
      content: item.node.frontmatter.content,
      id: index
    }
  })
  const scale = 1
  return (
    <S.Wrapper>
      <S.FullWidth>
        <S.Height height={450}>
          <Marquee
            key='1'
            velocity={10}
          >
            {times(testimonials.length, Number).map(id => (
              <S.Testimonial key={id} scale={scale} offset='true'>
                <QuoteAltRight
                  style={{
                    color: 'var(--primary-color)',
                    position: 'absolute',
                    top: '-10px',
                    right: '-30px',
                    width: '64px'
                  }}
                />
                <S.Author>{testimonials[id].author}</S.Author>
                <S.Company>{testimonials[id].company}</S.Company>
                <S.Body dangerouslySetInnerHTML={{ __html: testimonials[id].content }} />
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
            content
          }
        }
      }
    }
  }
`
