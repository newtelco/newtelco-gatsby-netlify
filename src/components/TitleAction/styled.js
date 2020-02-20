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
`

export const Text = styled.span`
  font-size: 2rem;
  color: var(--gray);
  font-weight: 600;
  line-height: 120%;
  ${media.lessThan('medium')`
    font-size: 1.7rem;
  `}
`

export const TextValue = styled.span`
  font-size: 2rem;
  color: var(--gray);
  ${media.lessThan('medium')`
    font-size: 1.7rem;
  `}
`

export const Button = styled.button`
  height: 50px;
  margin: 10px;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: var(--primary-color);
  color: var(--body-bg);
  border: none;
  font-weight: 600;
  font-size: 2rem;
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0 1px 15px rgba(50, 50, 93, 0.5);
  }
`
