import styled from 'styled-components'
import media from 'styled-media-query'

export const ButtonHamburger = styled.button`
  background: transparent;
  display: inline-block;
  width: 50px;
  height: 50px;
  border: none;
  position: absolute;
  border-radius: 3px;
  top: var(--space-md);
  right: var(--space-md);
  ${media.greaterThan('medium')`
    display: none;
  `}

  &.active {
    z-index: 100;
    span {
      background: transparent;
      &:before,
      &:after {
        top: 0;
        left: 0;
        background-color: #fff;
      }
      &:before {
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
      }
    }
  }

  span {
    background: var(--secondary-color);
    border-radius: 10px;
    display: inline-block;
    height: 3px;
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:before,
    &:after {
      content: '';
      background: var(--secondary-color);
      border-radius: 10px;
      display: inline-block;
      height: 3px;
      width: 100%;
      position: absolute;
      left: 0;
      transition: 0.3s;
    }

    &:before {
      top: -10px;
    }

    &:after {
      bottom: -10px;
    }
  }
`
