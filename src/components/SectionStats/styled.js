import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  height: 800px;
  flex-direction: column;
  margin: 50px 0 200px 0;
  position: relative;

  ${media.lessThan('medium')`
    height: 1250px;
    margin: 300px 0 0 0;
  `}
`

export const SvgImage = styled.div`
  position: relative;
  &::before {
    position: absolute;
    height: 850px;
    opacity: 0.1;
    content: '';
    background: linear-gradient(to right, #8cbf86, #66b4a6, #408ca3);

    z-index: -1;
    top: 0px;
    border-radius: 60px;
    transform: skew(0deg, 7deg) translateX(50%);
    left: auto;
    right: 50%;
  }
  ${media.lessThan('medium')`
    &::before {
      width: 100%;
      height: 1150px;
    }
  `}
  ${media.greaterThan('medium')`
    &::before {
      width: 950px;
    }
  `}
  ${media.greaterThan('large')`
    &::before {
      width: 1250px;
    }
  `}
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 150px;
  ${media.lessThan('medium')`
    & {
      flex-direction: column;
    }
  `}
`

export const Datacenter = styled.img`
  top: 220px;
  left: 20px;
  max-width: 600px;
  opacity: 0;

  &.imageInView {
    animation: slideIn 0.5s ease-in-out forwards;
    animation-delay: 0.5s;
  }
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-20vw);
    }
    100% {
      opacity: 1;
      transform: translateX(0vw);
    }
  }

  ${media.lessThan('medium')`
    & {
      width: 100%;
      left: 50%;
      transform: translateX(50%);
    }
  `}
`

export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-left: 50px;
  margin-top: 150px;
  max-height: 450px;

  ${media.lessThan('medium')`
    margin: 70px auto;
    justify-content: center;
    padding-left: 0px;
    margin-left: -25px;
  `}
`
