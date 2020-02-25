import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as S from './styled.js'

const Product = props => {
  const [ref, inView, entry] = useInView({
    threshold: 0.8,
    rootMargin: '50px 20px 75px 30px',
    triggerOnce: true,
  })
  const getRooms = () => {
    fetch('https://newtelco.dev/.netlify/functions/netbox', {})
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results)
        const siteNames = []
        data.results.forEach(site => siteNames.push(site.name))
        return siteNames
      })
      .catch(err => console.error(err))
  }
  console.log(inView)
  return (
    <>
      <S.Header>{props.product.node.frontmatter.title}</S.Header>
      <div ref={ref}>
        <S.SectionWrapper>
          {typeof window !== 'undefined' &&
            props.product.node.frontmatter.title === 'NCEX' &&
            getRooms()}
          <S.ProductImage
            src={props.product.node.frontmatter.image}
            alt="Product Image"
          />
          <S.Product
            dangerouslySetInnerHTML={{ __html: props.product.node.html }}
            className={inView ? 'textInView' : ''}
            id={props.indexNr % 2 == 0 ? 'left' : 'right'}
          ></S.Product>
        </S.SectionWrapper>
      </div>
    </>
  )
}

export default Product
