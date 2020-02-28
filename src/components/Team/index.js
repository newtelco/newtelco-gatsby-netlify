import React, { useState } from 'react'
import Product from './product'

import * as S from './styled.js'

const Products = props => {
  const [sites, setSites] = useState(0)

  const siteNames = []
  // if (sites.length === 0) {
  //   fetch('https://newtelco.dev/.netlify/functions/netbox')
  //     .then(resp => resp.json())
  //     .then(data => {
  //       data.results.forEach(site => siteNames.push(site.name))
  //       console.log(siteNames.length)
  //       setSites(siteNames)
  //     })
  //     .catch(err => console.error(err))
  // }
  console.log(props)
  return (
    <S.Wrapper>
      Team!
      {/* {props.items.map((product, index) => {
        const indexNr = index + 2
        return (
          <React.Fragment key={product.node.frontmatter.title}>
            <Product
              product={product}
              indexNr={indexNr}
              sites={product.node.frontmatter.title === 'NCEX' ? sites : null}
            />
          </React.Fragment>
        )
      })} */}
    </S.Wrapper>
  )
}

export default Products
