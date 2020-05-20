import styled from 'styled-components'
import media from 'styled-media-query'
import LocalizedLink from '../../LocalizedLink'

export const OverlayWrapper = styled.div`
  width: 100vw;
  height: 0%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
  background-color: #67b246;

  &.active {
    z-index: 9998;
    transform: translate(0%, 0%);
    height: 100%;
  }
  &.hidden {
    z-index: 99998;
    transform: translate(0%, 0%);
    height: 0vh;
  }

  /* & #shape-overlays {
    z-index: -1;
  } */
`

export const NavNumber = styled.div`
  font-family: var(--font-face-serif);
  font-size: 2rem;
  color: var(--gray);
  display: inline-block;
  margin-right: 10px;
`

export const HeaderImage = styled.img`
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
`

export const ShapeOverlays = styled.svg`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  & path:nth-of-type(1) {
    fill: #c4dbea;
  }
  & path:nth-of-type(2) {
    fill: #4c688b;
  }
  & path:nth-of-type(3) {
    fill: #2e496a;
  }
`

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 60%;
  margin: 0 auto;
  position: relative;
  top: 50%;
  left: -10%;
  transform: translateY(-50%);

  & ul {
    list-style: none;
    padding: 0;
    display: inline-block;
    position: relative;
    height: 90%;
    opacity: 0;
    transition: opacity 250ms ease-in-out;
    transition-delay: 300ms;

    &.active {
      opacity: 1;
    }

    & li {
      display: block;
      height: calc(100% / 7);
      position: relative;
      margin-left: 0px;
      margin-top: 40px;
      margin-bottom: 40px;
      text-align: left;
    }
  }
`

export const NavigationLink = styled(LocalizedLink)`
  text-decoration: none;
  position: relative;
  color: #fff;
  z-index: 101;
  text-align: left;
  font-size: 2.8rem;
  font-family: var(--font-face-serif);
  font-weight: 300;

  &.active {
    &:after {
      position: absolute;
      display: inline-block;
      content: '';
      border-bottom: 10px solid #fff;
      width: 320px;
      font-family: var(--font-face-san-serif);
      position: absolute;
      top: 40px;
      left: -150px;
    }
  }
`
