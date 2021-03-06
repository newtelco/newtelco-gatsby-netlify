import styled from 'styled-components'
import media from 'styled-media-query'
import LocalizedLink from '../LocalizedLink'

export const HeaderWrapper = styled.div`
  background-color: var(--body-bg);
  ${media.greaterThan('large')`
    margin-bottom: var(--space);
  `}
  box-shadow: 0 1px 15px rgba(50,50,93,.2);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--width-container);
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: var(--space) var(--space);
  position: relative;
  min-height: 75px;

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
  ${media.greaterThan('large')`
    padding: var(--space-sm) var(--space-sm);
  `}
`

export const LogoLink = styled(LocalizedLink)`
  display: inline-block;
  margin-right: 0.5rem;
  width: 170px;
  z-index: 2;
  ${media.lessThan('medium')`
    width: 200px;
    margin-top: 5px;
  `}
`

export const NavMenu = styled.div`
  width: 100%;
  transition: opacity 500ms ease-in-out, border-width 240ms linear;

  ${media.lessThan('medium')`
    opacity: 0;
  `}

  ${media.greaterThan('medium')`
    margin-left: auto;
    width: auto;
  `}
`

export const NavLanguages = styled.div`
  margin-left: var(--space);

  ${media.lessThan('medium')`
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  `}

  &.active {
    position: absolute;
    margin-left: 0px;
    opacity: 1;
    bottom: 20px;
    left: calc(50% - 20px);
    z-index: 2;
  }
`
