import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  min-height: 500px;
  flex-direction: column;
  margin: 200px 0;
`

export const SectionSvg = styled.div`
  position: relative;
  &::before {
    position: absolute;
    height: 1250px;
    opacity: 0.1;
    content: '';
    background: linear-gradient(to right, #8cbf86, #66b4a6, #408ca3);

    z-index: -1;
    top: 0px;
    border-radius: 60px;
    transform: skew(0deg, -10deg);
    left: auto;
  }
  ${media.lessThan('medium')`
    &::before {
      width: 100%;
      right: -3vw;
    }
  `}
  ${media.greaterThan('medium')`
    &::before {
      width: 950px;
      right: 4vw;
    }
  `}
  ${media.greaterThan('large')`
    &::before {
      width: 1250px;
      right: -1vw;
    }
  `}
`

export const Content = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-around;
  flex-direction: column;
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
  font-size: 4rem;
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

export const ActionBtn = styled.div`
  border-radius: 5px;
  box-shadow: 0 1px 15px rgba(50, 50, 93, 0.2);
  background-color: #67b246;
  color: #fff;
  padding: 15px 30px;
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  margin: 0 auto;
  margin-top: 40px;
  width: 200px;
  transition: box-shadow 250ms ease-in-out, transform 250ms ease-in-out;

  & > * {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 25px rgba(50, 50, 93, 0.4);
    transform: translateY(-5px);
  }
`
