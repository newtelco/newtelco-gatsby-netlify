import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  min-height: 500px;
  flex-direction: column;

  /* &:nth-child(2n + 1):before {
    position: absolute;
    display: inline-block;
    content: '';
    width: 150vw;
    height: 118%;
    max-height: 800px;
    background-color: #67b246;
    z-index: -1;
    opacity: 0.9;
    transform: translate(-24vw, 30px) rotate(-4deg);
    overflow: hidden;
  } */

  /* ${media.lessThan('medium')`
    &:nth-child(2n + 1):before {
      height: 0;
      width: 0;
    }
  `} */
`
export const SectionSvg = styled.div`
  position: absolute;
`

export const Content = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-around;
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const Container = styled.div`
  width: 100%;
  max-width: var(--width-container);
  margin: 0 auto;
  padding: calc(var(--space) * 1.3) var(--space);
  ${media.greaterThan('large')`
    padding: calc(var(--space)*1.3) var(--space-sm);
  `}
`

export const Header = styled.h3`
  font-size: 3.5rem;
  font-weight: 600;
  margin: 100px auto 50px auto;

  &:before {
    display: inline-block;
    content: '';
    border-top: 0.3rem solid var(--primary-color);
    width: 8rem;
    margin: 0 1rem;
    transform: translateY(-1rem);
  }

  &:after {
    display: inline-block;
    content: '';
    border-top: 0.3rem solid var(--primary-color);
    width: 8rem;
    margin: 0 1rem;
    transform: translateY(-1rem);
  }
`
