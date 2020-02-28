import styled from 'styled-components'
import media from 'styled-media-query'
import LocalizedLink from '../LocalizedLink'

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

  opacity: 0;

  &.textInView {
    animation: slideUp 500ms ease-in-out forwards;
  }

  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(5rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0rem) scale(1);
    }
  }

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
  opacity: 0;

  &#right.textInView {
    flex-direction: row-reverse;
    animation: slideInLeft 0.7s ease-in-out forwards;
  }
  &#left.textInView {
    flex-direction: row;
    animation: slideInRight 0.7s ease-in-out forwards;
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

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`

export const ActionButton = styled(LocalizedLink)`
  width: 40%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--primary-color);
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff !important;
  font-weight: 600;
  line-height: 40px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
`
