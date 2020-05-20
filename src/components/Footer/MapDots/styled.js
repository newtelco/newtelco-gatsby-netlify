import styled from 'styled-components'
import media from 'styled-media-query'

export const MapImage = styled.img`
  position: absolute;
  bottom: 20px;
  right: 50%;
  transform: translateX(50%);
  z-index: 1;
  opacity: 0.15;

  ${media.lessThan('medium')`
    bottom: 200px;
  `}
`
