import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  margin: 30px;
  align-items: center;
  border-radius: 5px;

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }

  ${media.greaterThan('medium')`
    padding: 10px;
  `}

  ${media.greaterThan('large')`
    padding: 15px;
  `}
  ${media.greaterThan('huge')`
    padding: 15px;
  `}
`

export const SectionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: 400px;
  margin: 10px;
`

export const Header = styled.h3`
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
  padding: 5px 20px;
`

export const Content = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  line-height: 210%;
  font-weight: 300;

  ${media.lessThan('medium')`
    padding: 30px;
  `}
  ${media.greaterThan('medium')`
    padding: 40px;
    font-size: 1.1rem;
  `}
  ${media.greaterThan('large')`
    padding: 50px;
    font-size: 2rem;
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
  margin: 15px;
  max-width: 100px;

  & > * {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`
