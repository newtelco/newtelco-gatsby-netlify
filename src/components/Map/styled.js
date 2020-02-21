import styled from 'styled-components'
import media from 'styled-media-query'

export const MapImage = styled.img`
  position: absolute;
  top: -60px;
  z-index: -1;

  ${media.lessThan('medium')`
    max-width: 120%;
    top: 40px;
    right: -10%;
  `}

  ${media.greaterThan('medium')`
    max-width: 80%;
    top: 0;
    right: -25px;
  `}

  ${media.greaterThan('large')`
    max-width: 60%;
    right: 125px;
  `}
`
