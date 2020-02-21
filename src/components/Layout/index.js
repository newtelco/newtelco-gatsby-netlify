import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ScrollTop from '../ScrollTop'
import GlobalStyles from '../../styles/global'
import config from 'react-reveal/globals'

config({ ssrFadeout: true })

import * as S from './styled'

const LocaleContext = React.createContext()

// Use the built-in Context API to make the "locale" available to every component in the tree
// This e.g. enables the LocalizedLink to function correctly
// As this component wraps every page (due to the wrapPageElement API) we can be sure to have
// the locale available everywhere!
let options = {
  root: document.querySelector('#scrollTarget'),
  rootMargin: '0px',
  threshold: 1.0,
}

let isLeaving = false
let observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // we are ENTERING the "capturing frame". Set the flag.
      isLeaving = true
      console.log('leaving')
      // Do something with entering entry
    } else if (isLeaving) {
      // we are EXITING the "capturing frame"
      isLeaving = false
      console.log('entering')
      // Do something with exiting entry
    }
  })
}, options)

const Layout = ({ children, pageContext: { locale } }) => (
  <LocaleContext.Provider value={{ locale }}>
    <GlobalStyles />
    <S.Wrapper>
      <Header />
      <S.SiteContent role="main">
        <S.Container>{children}</S.Container>
      </S.SiteContent>
      <Footer />
    </S.Wrapper>
    <ScrollTop />
  </LocaleContext.Provider>
)

export { Layout, LocaleContext }
