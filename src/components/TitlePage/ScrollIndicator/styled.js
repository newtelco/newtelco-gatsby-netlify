import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 12vh;
  opacity: 0.6;
  transition: opacity 500ms ease-in-out;

  &.outOfView {
    opacity: 0;
  }
`

export const Container = styled.div`
  width: 28px;
  /* border: 2px solid #67b246;
  border-radius: 10px; */
  margin: 0 auto;
  height: 60px;
  padding: 3px;
  display: flex;
  align-items: center;
  position: relative;
`

export const Animation = styled.div`
  animation: MoveUpDown 1.5s ease-in-out infinite;
  position: absolute;
  left: 0;
  bottom: 0;
  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 0;
    }
    50% {
      bottom: 10px;
    }
  }
`
