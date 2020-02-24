import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 50px 0px;
  background-color: var(--body-bg);
  border-radius: 5px;
  box-shadow: 0 1px 15px rgba(50, 50, 93, 0.2);
  opacity: 0;

  animation: slideIn 0.5s ease-in-out forwards;
  animation-delay: 0.5s;

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
    width: 100%;
    padding: 10px;
  `}
  ${media.greaterThan('medium')`
    padding: var(--space) var(--space-sm);
  `}

  ${media.greaterThan('large')`
    padding: calc(var(--space)*1.3) var(--space-sm);
  `}
`

export const TextWrapper = styled.div`
  margin: 5px 10px;

  ${media.lessThan('medium')`
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `}
`

export const Text = styled.span`
  font-size: 2rem;
  color: var(--gray);
  font-weight: 600;
  line-height: 120%;

  ${media.lessThan('medium')`
    font-size: 1.7rem;
    margin-right: 10px;
  `}
`

export const TextValue = styled.span`
  font-size: 2rem;
  color: var(--gray);
  ${media.lessThan('medium')`
    font-size: 1.5rem;
  `}
`

export const Button = styled.button`
  position: relative;
  height: 50px;
  margin: 10px;
  padding: 5px 15px;
  border-radius: 5px;
  color: var(--body-bg);
  border: none;
  font-weight: 600;
  font-size: 2rem;
  background-color: transparent;
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out,
    color 250ms ease-in-out;
  color: #67b246;
  box-shadow: 0 1px 15px rgba(50, 50, 93, 0.15);
  font-family: var(--font-face-serif);

  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  border-bottom: none;
  z-index: 2;

  ${media.lessThan('medium')`
    font-size: 1.7rem;
  `}

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    background-color: var(--primary-color);
    width: 50px;
    height: 100%;
    right: 0;
    z-index: -1;
    border-radius: 5px;
    transition: width 250ms ease-in-out;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0 1px 15px rgba(50, 50, 93, 0.5);
    color: #fff;

    &::before {
      width: 100%;
    }
  }
`

export const ButtonIcon = styled.div`
  margin-left: 20px;
  margin-top: 5px;
`
