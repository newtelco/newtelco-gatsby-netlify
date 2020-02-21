import styled from 'styled-components'
import media from 'styled-media-query'

export const FooterWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

export const FooterContainer = styled.div`
  width: 100%;
  padding: 30px;
  /* z-index: 4; */
  background-color: var(--gray-extra-light);
  ${media.greaterThan('medium')`
    padding: 20px;
  `}
  ${media.greaterThan('large')`
    padding: 30px;
  `}

  p {
    margin: 1rem;
  }
`

export const FooterLinkSectionHeader = styled.div`
  font-weight: 600;
  font-size: 120%;
  color: var(--gray-dark);
  margin-bottom: 10px;
`

export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px 0;

  & * {
    z-index: 2;
  }
`

export const FooterLinkSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  ${media.lessThan('medium')`
    justify-content: space-around;
    padding: 5px;
    font-size: 1.3rem;
  `}

  & a {
    text-decoration: none;
  }
`

export const FooterBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;

  & * {
    z-index: 2;
  }
`
