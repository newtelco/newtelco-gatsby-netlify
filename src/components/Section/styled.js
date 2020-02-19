import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  min-height: 500px;
  flex-direction: column;
`

export const Content = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-around;
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
  font-size: 3rem;
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
