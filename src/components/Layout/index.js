import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ScrollTop from '../ScrollTop'
import GlobalStyles from '../../styles/global'
import config from 'react-reveal/globals'
import { useInView } from 'react-intersection-observer'

const LocaleContext = React.createContext()
config({ ssrFadeout: true })

import * as S from './styled'

// Use the built-in Context API to make the "locale" available to every component in the tree
// This e.g. enables the LocalizedLink to function correctly
// As this component wraps every page (due to the wrapPageElement API) we can be sure to have
// the locale available everywhere!

const Layout = ({ children, pageContext: { locale } }) => {
  // const [ref, inView, entry] = useInView({
  //   /* Optional options */
  //   threshold: 0,
  // })

  // if (inView) {
  //   console.log('inView')
  // }
  return (
    <LocaleContext.Provider value={{ locale }}>
      <GlobalStyles />
      <S.Wrapper>
        <Header />
        <S.SiteContent role="main">
          <S.Container>{children}</S.Container>
        </S.SiteContent>
        <Footer />
      </S.Wrapper>
      {/* {inView && <ScrollTop />} */}
    </LocaleContext.Provider>
  )
}

export { Layout, LocaleContext }
