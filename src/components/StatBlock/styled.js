import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  margin-left: 25px;
  margin-bottom: 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  cursor: pointer;
  box-shadow: rgba(16, 66, 97, 0.07) 0px 8px 20px 0px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  position: relative;
  padding: 40px;
  transition: box-shadow 250ms ease-in-out, transform 250ms ease-in-out;

  &:nth-child(2n) {
    top: 35px;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }

  ${media.lessThan('medium')`
    width: 160px;
    height: 160px;
  `}
`

export const Value = styled.div`
  font-size: 5rem;
  font-family: 'Major Mono Display';
  font-weight: 100;
  color: var(--primary-color);
  ${media.lessThan('medium')`
    font-size: 4rem;
  `}
`

export const Label = styled.div`
  font-size: 2.5rem;
  font-family: var(--font-face-serif);
  ${media.lessThan('medium')`
    font-size: 2rem;
  `}
`
