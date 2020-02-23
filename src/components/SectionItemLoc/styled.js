import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  margin: 30px;
  min-width: 70px;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(-20%);
  transition: opacity 450ms ease-in-out, transform 450ms ease-in-out;
  &:nth-of-type(1) {
    transition-delay: 150ms;
  }
  &:nth-of-type(2) {
    transition-delay: 250ms;
  }
  &:nth-of-type(3) {
    transition-delay: 350ms;
  }

  &.locationInView {
    opacity: 1;
    transform: translateY(0vh);
  }
`

export const SvgImage = styled.div`
  transition: transform 250ms ease-in-out;
  display: flex;
  justify-content: center;
  opacity: 0.8;
  z-index: 9;

  &:hover {
    cursor: pointer;
  }

  & svg {
    display: flex;
    justify-content: center;
  }

  ${media.lessThan('medium')`
    transform: scale(0.4) !important;
    &:hover {
      cursor: pointer;
      transform: translateY(-10px) scale(0.4) !important;
    }
  `}

  & {
    display: inline-block;
    vertical-align: middle;
    transform: scale(0.6) perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    transition-duration: 0.3s;
    transition-property: transform;
  }
  &:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    top: 100%;
    left: 12.5%;
    height: 30px;
    width: 90%;
    opacity: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0) 80%
    );
    transition: transform 250ms ease-in-out, opacity 500ms ease-in-out;
  }
  &:hover,
  &:focus,
  &:active {
    transform: scale(0.6) translateY(-10px);
  }
  &:hover:before,
  &:focus:before,
  &:active:before {
    opacity: 1;
    transform: scale(0.6) translateY(10px);
  }
`

export const Header = styled.h3`
  font-size: 10rem;
  font-weight: 100;
  padding: 5px 20px;
  opacity: 0.8;
  position: absolute;
  margin-top: 350px;
  transform: translate(20px, 70px);
  z-index: 8;
  color: #67b246;
  font-family: 'Raleway' !important;

  ${media.lessThan('medium')`
    font-size: 6rem;
    margin-top: 270px;
  `}
`

export const Content = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 10px;
  ${media.lessThan('medium')`
    padding: 30px;
  `}
  ${media.greaterThan('medium')`
    font-size: 1.1rem;
  `}
  ${media.greaterThan('large')`
    font-size: 1.3rem;
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
  margin: 15px 0px;

  & > * {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`
