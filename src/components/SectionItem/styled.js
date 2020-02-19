import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  margin: 15px;
  height: 350px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 1px 15px rgba(50, 50, 93, 0.2);
`

export const Content = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 10px;
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
  width: 192px;
  margin: 10px;
`

export const Header = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  padding: 5px 20px;
`
