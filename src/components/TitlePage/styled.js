import styled from 'styled-components'
import media from 'styled-media-query'

export const TitleElement = styled.h1`
  line-height: 140%;
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary-color);

  ${media.greaterThan('medium')`
    line-height: 1.1;
    font-size: 3.5rem;
  `}

  ${media.greaterThan('large')`
    line-height: 1.1;
    font-size: 4rem;
  `}
`

export const TitleWrapper = styled.div`
  margin-top: calc(10 * var(--space-lg));
  margin-bottom: calc(10 * var(--space-lg));
`

export const TitleSubElement = styled.h3`
  line-height: 140%;
  font-size: 1.6rem;
  font-weight: 100;
  color: var(--gray-light);
  margin-top: var(--space);
  max-width: 50%;
`
