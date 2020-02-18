import styled from 'styled-components'
import media from 'styled-media-query'

export const MapImage = styled.img`
  position: absolute;
  top: -60px;
  right: 0;
  z-index: -1;

  ${media.greaterThan('medium')`
    max-width: 80%;
  `}

  ${media.greaterThan('large')`
    max-width: 60%;
  `}
`
