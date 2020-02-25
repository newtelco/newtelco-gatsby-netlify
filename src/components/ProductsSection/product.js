import React from 'react'
import { useInView } from 'react-intersection-observer'
import Sites from './sites'

import * as S from './styled.js'

const Product = props => {
  const [ref, inView, entry] = useInView({
    threshold: 0.8,
    rootMargin: '50px 20px 75px 30px',
    triggerOnce: true,
  })
  const getRooms = async () => {
    const siteNames = []
    fetch('https://newtelco.dev/.netlify/functions/netbox', {})
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results)
        data.results.forEach(site => siteNames.push(site.name))
        console.log(siteNames)
        return siteNames
      })
      .catch(err => console.error(err))
  }
  // console.log(inView)
  return (
    <>
      <S.Header>{props.product.node.frontmatter.title}</S.Header>
      <S.SectionWrapper>
        <div ref={ref}></div>
        <S.ProductImage
          src={props.product.node.frontmatter.image}
          alt="Product Image"
        />
        <S.Product
          dangerouslySetInnerHTML={{ __html: props.product.node.html }}
          className={inView ? 'textInView' : ''}
          id={props.indexNr % 2 == 0 ? 'left' : 'right'}
        ></S.Product>
        <Sites
          sites={
            typeof window !== 'undefined' &&
            props.product.node.frontmatter.title === 'NCEX' &&
            getRooms()
          }
        />
      </S.SectionWrapper>
    </>
  )
}

export default Product
