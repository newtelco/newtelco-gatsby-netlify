import React from 'react'
import { navigate } from 'gatsby'
import SEO from '../components/seo'
import TitlePage from '../components/TitlePage'
import useTranslations from '../components/useTranslations'
import SectionCategory from '../components/SectionCategory'
import SectionStats from '../components/SectionStats'
import { useInView } from 'react-intersection-observer'
import ScrollTop from '../components/ScrollTop'
import loadable from '@loadable/component'
const SectionPartners = loadable(() => import('../components/SectionPartners'))
// import { CookieBanner } from '@palmabit/react-cookie-law'
// import SectionLocation from '../components/SectionLocation'

const Index = () => {
  const { hello, subline, products, services, location } = useTranslations()

  const languagePref = lang => {
    if (lang.includes('de')) {
      navigate('/de')
    } else if (lang.includes('ru')) {
      navigate('/ru')
    } else if (lang.includes('en-US') || lang.includes('en-GB')) {
      navigate('/')
    }
  }

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const langLocalStorage = window.localStorage.getItem('nt_lang')
  //     if (!langLocalStorage) {
  //       fetch(
  //         `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.GEO_KEY}&fields=languages`
  //       )
  //         .then(r => r.json())
  //         .then(data => {
  //           if (data.languages) {
  //             languagePref(data.languages)
  //             window.localStorage.setItem('nt_lang', data.languages)
  //           }
  //         })
  //     } else {
  //       languagePref(langLocalStorage)
  //     }
  //   }
  // }, [])

  const [ref, inView, entry] = useInView({
    threshold: 0
  })

  return (
    <div className='homepage'>
      <SEO title='Home' />
      <TitlePage text={hello} subtitle={subline} />
      <SectionStats />
      <SectionPartners />
      <div ref={ref}>
        <SectionCategory title={products} />
        <SectionCategory title={services} />
        {/* <SectionLocation title={location}></SectionLocation> */}
      </div>
      <ScrollTop inView={inView} />
      {/* <CookieBanner
        message="Newtelco Cookie Policy"
        policyLink="https://newtelco.dev/privacy"
        styles={{
          dialog: {
            position: 'fixed',
            top: 'unset',
            bottom: '0px',
            left: '0px',
            right: '0px',
            color: '#eaeaea',
            width: '100%',
            backgroundColor: 'rgb(248, 247, 247)',
            padding: '10px',
            zIndex: '10000',
            boxShadow: '0 -2px 10px rgba(0,0,0,0.15)',
            fontFamily: 'Libre Franklin'
          },
          message: {
            fontFamily: 'Libre Baskerville',
            fontSize: '2rem',
            fontWeight: '600',
            color: '#67b246',
            marginTop: '15px',
            marginBottom: '15px'
          },
          optionLabel: {
            height: 'auto',
            width: 'auto',
            minHeight: '14px',
            fontSize: '12pt',
            display: 'inline-block',
            padding: '1px 0px 0px 20px',
            position: 'relative',
            top: '0px',
            left: '0px',
            zIndex: '1',
            cursor: 'default',
            verticalAlign: 'top',
            color: '#4e4e4e',
            fontFamily: 'Libre Franklin'
          },
          button: {
            display: 'inline-block',
            backgroundColor: '#67b246',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            minWidth: '80px',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '12pt',
            fontWeight: '400',
            marginRight: '5px',
            marginLeft: '5px',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            fontFamily: 'Libre Baskerville'
          }
        }}
      /> */}
    </div>
  )
}

export default Index
