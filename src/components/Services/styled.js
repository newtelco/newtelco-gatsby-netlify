import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  min-height: 500px;
  flex-direction: column;
  margin: 50px 0px 200px 0px;
`

export const Header = styled.div`
  font-size: 3.7rem;
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

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }
`

export const Product = styled.div`
  --max-lines: 15;
  --lh: 2.1rem;
  line-height: var(--lh);
  position: relative;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 1rem;

  font-weight: 300;
  opacity: 0;

  &.textInView {
    opacity: 1;
  }

  #right.textInView {
    animation: slideInLeft .7s ease-in-out;
    opacity: 1;
  }
  #left.textInView {
    animation: slideInRight .7s ease-in-out;
    opacity: 1;
  }
  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-30rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0rem) scale(1);
    }
  }
  @keyframes slideInRight {
    0% {
      opacity: 0;
      transform: translateX(30rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0rem) scale(1);
    }
  }

  ${media.lessThan('medium')`
    padding: 30px;
    font-size: 1.5rem;
  `}
  ${media.greaterThan('medium')`
    padding: 40px;
    font-size: 1.5rem;
  `}
  ${media.greaterThan('large')`
    padding: 50px;
    font-size: 1.6rem;
  `}
  ${media.greaterThan('huge')`
    padding: 70px;
    font-size: 1.8rem;
  `}
`

export const ProductImage = styled.img`
  width: 400px;
`
