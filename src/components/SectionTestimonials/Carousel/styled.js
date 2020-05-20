import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;
  width: 90vw;
  min-height: 300px;
  margin: 0 auto;
`

export const Partner = styled.div`
  filter: grayscale(100%);
  margin: 0 auto;
  width: 200px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    transform: scale(0.5);
    opacity: 0.5;
  }
`
