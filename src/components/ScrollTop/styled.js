import styled from 'styled-components'
import media from 'styled-media-query'

export const ScrollBtnWrapper = styled.div`
  position: fixed;
  bottom: 5vh;
  right: 5vw;
  z-index: 101;
  opacity: 0;
  outline: none;
  transition: opacity 250ms ease-in-out;

  &.in-view {
    opacity: 1;
  }
`

export const ScrollBtn = styled.button`
  border-radius: 50%;
  background-color: var(--primary-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 18px;
  border: none;
  transition: transform 250ms ease-in-out;

  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
  }
`
