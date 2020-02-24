import React from 'react'
import Product from './product'

import * as S from './styled.js'

const ProductsSection = props => {
  return (
    <S.Wrapper>
      {props.items.map((product, index) => {
        const indexNr = index + 2
        return (
          <React.Fragment key={product.node.frontmatter.title}>
            <Product product={product} indexNr={indexNr} />
          </React.Fragment>
        )
      })}
    </S.Wrapper>
  )
}

export default ProductsSection
