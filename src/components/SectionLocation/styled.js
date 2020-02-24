import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  min-height: 500px;
  flex-direction: column;
  margin: 50px 0px 200px 0px;
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
    flex-direction: row;
  `}
`

export const Container = styled.span`
  &:nth-of-type(1) {
    transition-delay: 150ms;
  }
  &:nth-of-type(2) {
    transition-delay: 250ms;
  }
  &:nth-of-type(3) {
    transition-delay: 350ms;
  }
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
  ${media.lessThan('medium')`
    &::before {
      border-top: none;
      display: none;
      content: none;
    }
    &::after {
      border-top: none;
      display: none;
      content: none;
    }
  `}
`
