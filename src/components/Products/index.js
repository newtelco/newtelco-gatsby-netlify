import React, { useState } from 'react'
import Product from './product'

import * as S from './styled.js'

const Products = props => {
  const [sites, setSites] = useState(0)
  console.log(props)

  const siteNames = []
  return (
    <S.Wrapper>
      {props.items.map((product, index) => {
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
      })}
    </S.Wrapper>
  )
}

export default Products
