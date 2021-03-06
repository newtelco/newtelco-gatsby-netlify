import styled from 'styled-components'
import media from 'styled-media-query'
import LocalizedLink from '../../LocalizedLink'
import { Link } from 'gatsby'

export const Navigation = styled.nav`
  display: none;
  flex-direction: column;

  &.active {
    display: flex;
    z-index: 99;
    margin: 15vh 5vw;
  }

  &.active a {
    margin: 20px;
    font-size: 3rem;
    font-family: 'Raleway';
    transform: translateX(0%);
    margin-bottom: 4vh;
  }

  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`

export const NavigationLink = styled(LocalizedLink)`
  color: var(--text-dark);
  text-decoration: none;
  position: relative;
  padding: 0 var(--space-sm);
  margin-bottom: var(--space-sm);
  text-align: center;
  font-weight: 300;

  ${media.greaterThan('medium')`
    margin-left: var(--space-sm);
    margin-bottom: 0;
  `}
  ${media.greaterThan('large')`
    margin-left: var(--space);
  `} 

  ${media.lessThan('medium')`
    transition: all 250ms ease-in-out 2s;
    transform: translateX(-100%);
  `}


  &:after {
    ${media.greaterThan('medium')`
      content: '';
      display: inline-block;
      width: 0;
      height: 4px;
      background: var(--primary-color);
      position: absolute;
      left: 0;
      bottom: -10px;
      opacity: 0;
      transition: .3s ease-in-out;
    `}
  }

  &:hover {
    font-weight: 300;
  }

  &:hover,
  &.active {
    font-weight: bold;

    ${media.greaterThan('medium')`
      font-weight: normal;
    `}

  &:after {
      opacity: 1;
      bottom: -10px;
      width: 100%;
    }
  }
  &.active:hover {
    font-weight: normal;
  }
  &:hover {
    font-weight: 300;
  }
`

export const NavigationButton = styled(Link)`
  background: var(--primary-color);
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  padding: var(--space-sm) var(--space);
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  ${media.greaterThan('medium')`
    margin-left: var(--space-lg);
  `}
`
