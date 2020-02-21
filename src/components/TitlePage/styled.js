import styled from 'styled-components'
import media from 'styled-media-query'

export const TitleElement = styled.h1`
  line-height: 140%;
  font-weight: bold;
  color: var(--primary-color);

  ${media.lessThan('medium')`
    line-height: 1.1;
    font-size: 2.5rem;
  `}
  ${media.greaterThan('medium')`
    line-height: 1.1;
    font-size: 3.2rem;
  `}
  ${media.greaterThan('large')`
    line-height: 1.1;
    font-size: 3.5rem;
  `}
  ${media.greaterThan('huge')`
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
  font-weight: 100;
  color: var(--gray-light);
  margin-top: var(--space);
  max-width: 60%;
  ${media.lessThan('medium')`
    font-size: 1.3rem;
  `}
  ${media.greaterThan('medium')`
    font-size: 1.7rem;
    max-width: 40%;
  `}
  ${media.greaterThan('large')`
    font-size: 1.7rem;
  `}
`
