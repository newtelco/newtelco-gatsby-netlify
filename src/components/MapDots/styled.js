import styled from 'styled-components'
import media from 'styled-media-query'

export const MapImage = styled.img`
  position: absolute;
  bottom: 100px;
  right: calc(50% - 318px);
  z-index: 1;
  opacity: 0.15;

  ${media.lessThan('medium')`
    top: 40px;
    right: 10%;
  `}
`
