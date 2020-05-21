import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'react-feather'

import * as S from './styled.js'

const Product = props => {
  const [ref, inView, entry] = useInView({
    threshold: 0.9,
    triggerOnce: true
  })

  return (
    <>
      <S.Header className={inView ? 'textInView' : ''}>
        {props.product.node.frontmatter.title}
      </S.Header>
      <S.SectionWrapper
        className={inView ? 'textInView' : ''}
        id={props.indexNr % 2 == 0 ? 'left' : 'right'}
      >
        <div ref={ref} />
        <S.ProductImage
          src={props.product.node.frontmatter.image}
          alt='Product Image'
          loading='lazy'
        />
        <S.ProductWrapper>
          <S.Product
            dangerouslySetInnerHTML={{
              __html: props.product.node.frontmatter.short
            }}
          >
          </S.Product>
          <S.ActionButton
            to={`/${props.product.node.fields.section.toLowerCase()}/${
              props.product.node.fields.slug
            }`}
          >
            Read More
          </S.ActionButton>
        </S.ProductWrapper>
      </S.SectionWrapper>
    </>
  )
}

export default Product
