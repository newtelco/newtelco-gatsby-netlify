import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  ${media.lessThan('medium')`
    overflow-x: hidden;
  `}
`

export const SiteContent = styled.section`
  display: flex;
  /* flex: 1; */
  flex: 1 0 auto;
  width: 100%;
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
