import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  margin: 30px;
  align-items: center;
  border-radius: 5px;

  &.rowReverse{
    flex-direction: row-reverse;
  }

  ${media.lessThan('medium')`
    flex-direction: column !important;
  `}

  ${media.greaterThan('medium')`
    padding: 10px;
  `}

  ${media.greaterThan('large')`
    padding: 15px;
  `}
  ${media.greaterThan('huge')`
    padding: 15px;
  `}

  & > .imageWrapper {
    opacity: 0;
  }

  #right.sectionInView {
    animation: slideInRight .7s ease-in-out;
    opacity: 1;
  }
  #left.sectionInView {
    animation: slideInLeft .7s ease-in-out;
    opacity: 1;
  }

  @keyframes slideInRight {
    0% {
      opacity: 0;
      transform: translateX(-30rem);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes slideInLeft {
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

export const SectionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const HeaderImg = styled.img`
  border-radius: 5px;
  ${media.lessThan('medium')`
    width: 250px;
    margin: 50px;
  `}
  ${media.greaterThan('medium')`
    width: 350px;
    margin: 50px;
  `}
  ${media.greaterThan('large')`
    width: 400px;
    margin: 20px;
  `}
`

export const Header = styled.h3`
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
  padding: 5px 20px;
  opacity: 0;

  &.textInView {
    animation: slideInTop-sm 0.7s ease-in-out;
    opacity: 1;
  }
  @keyframes slideInTop-sm {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Content = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  line-height: 210%;
  font-weight: 300;
  opacity: 0;

  &.textInView {
    animation: slideInTop-sm .7s ease-in-out;
    opacity: 1;
  }
  @keyframes slideInTop-sm {
    0% {
      opacity: 0;
      transform: translateY(5rem);
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

export const ActionBtn = styled.div`
  border-radius: 5px;
  box-shadow: 0 1px 15px rgba(50, 50, 93, 0.2);
  background-color: #67b246;
  color: #fff;
  padding: 5px 20px;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 15px;
  max-width: 100px;

  & > * {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`
