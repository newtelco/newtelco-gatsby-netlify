import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  width: 40%;
  margin: 50px;
  background-color: var(--body-bg);
  border-radius: 5px;
  box-shadow: 0 1px 15px rgba(50, 50, 93, 0.2);

  ${media.greaterThan('medium')`
    padding: var(--space) var(--space-sm);
  `}

  ${media.greaterThan('large')`
    padding: calc(var(--space)*1.3) var(--space-sm);
  `}
`

export const Text = styled.div`
  margin: 20px;
  font-weight: 300;
  color: var(--gray);
  line-height: 120%;
`

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background-color: var(--primary-color);
  border: none;
  font-weight: 500;
`
