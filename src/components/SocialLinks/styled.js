import styled from 'styled-components'
import media from 'styled-media-query'

export const SocialLinksList = styled.ul`
  display: flex;
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const SocialLinksItem = styled.li`
  display: block;
  margin-right: 1rem;
  transition: transform 150ms ease-in-out;

  & {
    display: inline-block;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
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
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0) 80%
    );
    transition-duration: 0.3s;
    transition-property: transform, opacity;
  }
  &:hover,
  &:focus,
  &:active {
    transform: translateY(-5px);
  }
  &:hover:before,
  &:focus:before,
  &:active:before {
    opacity: 1;
    transform: translateY(5px);
  }
`

export const SocialLinksLink = styled.a`
  display: block;
  width: 50px;
  color: var(--primary-color);
`
