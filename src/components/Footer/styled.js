import styled from 'styled-components'
import media from 'styled-media-query'

export const FooterWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

export const FooterContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: var(--gray-extra-light);
  ${media.lessThan('medium')`
    padding: 10px 50px;
  `}
  ${media.greaterThan('medium')`
    padding: 10px 100px;
  `}
  ${media.greaterThan('large')`
    padding: 10px 200px;
  `}
  ${media.greaterThan('huge')`
    padding: 10px 250px;
  `}

  p {
    margin: 1rem;
  }
`

export const FooterLinkSectionHeader = styled.div`
  font-weight: 600;
  font-size: 120%;
  color: var(--gray-dark);
  margin-bottom: 10px;
`

export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px 0;

  & * {
    z-index: 2;
  }
`

export const FooterLinkSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  ${media.lessThan('medium')`
    justify-content: space-around;
    padding: 5px;
    font-size: 1.3rem;
  `}

  & > a {
    display: inline-block;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    text-decoration: none;
    overflow: hidden;
  }
  & > a:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 0;
    background: #67b246;
    height: 4px;
    transition-property: right;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  & > a:hover:before,
  & > a:focus:before,
  & > a:active:before {
    right: 0;
  }
`

export const FooterBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;

  & * {
    z-index: 2;
  }
`
