import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -80px;
  padding-top: 60px;
`

export const Header = styled.h3`
  font-size: 3.7rem;
  font-weight: 600;
  margin: 10px auto 100px auto;

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
