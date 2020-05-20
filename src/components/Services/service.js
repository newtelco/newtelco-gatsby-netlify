import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as S from './styled.js'

const Service = props => {
  const [ref, inView, entry] = useInView({
    threshold: 0.8,
    rootMargin: '50px 20px 75px 30px',
    triggerOnce: true
  })
  return (
    <>
      <S.Header className={inView ? 'textInView' : ''}>
        {props.service.node.frontmatter.title}
      </S.Header>
      <S.SectionWrapper
        className={inView ? 'textInView' : ''}
        id={props.indexNr % 2 == 0 ? 'left' : 'right'}
      >
        <div ref={ref} />
        <S.ProductImage
          src={props.service.node.frontmatter.image}
          alt='Product Image'
          loading='lazy'
        />
        <S.ProductWrapper>
          <S.Product
            dangerouslySetInnerHTML={{
              __html: props.service.node.frontmatter.short
            }}
          >
          </S.Product>
          <S.ActionButton
            to={`/${props.service.node.fields.section.toLowerCase()}/${
              props.service.node.fields.slug
              }`}
          >
            Read More
          </S.ActionButton>
        </S.ProductWrapper>
      </S.SectionWrapper>
    </>
  )
}

export default Service
