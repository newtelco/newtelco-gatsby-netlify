import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  margin: 30px;
  min-width: 70px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 15px rgba(50, 50, 93, 0.2);
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: translateY(-6px);
  }

  ${media.greaterThan('medium')`
    padding: 10px;
    min-width: 200px;
  `}

  ${media.greaterThan('large')`
    padding: 15px;
    min-width: 250px;
  `}
  ${media.greaterThan('huge')`
    padding: 15px;
    min-width: 300px;
  `}
`

export const Container = styled.div`
  width: 100%;
  max-width: var(--width-container);
  margin: 0 auto;
  padding: calc(var(--space) * 1.3) var(--space);
  ${media.greaterThan('large')`
    padding: calc(var(--space)*1.3) var(--space-sm);
  `}
`

export const HeaderImg = styled.img`
  border-radius: 5px;
  width: 256px;
  margin: 10px;
`

export const Header = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  padding: 5px 20px;
`

export const Content = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 10px;
  ${media.lessThan('medium')`
    padding: 30px;
  `}
  ${media.greaterThan('medium')`
    font-size: 1.1rem;
  `}
  ${media.greaterThan('large')`
    font-size: 1.3rem;
  `}
`

export const ActionBtn = styled.div`
  border-radius: 5px;
  box-shadow: 0 1px 15px rgba(50, 50, 93, 0.2);
  background-color: #67b246;
  color: #fff;
  padding: 5px 20px;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 15px 0px;

  & > * {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`
