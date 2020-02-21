import React from 'react'
import SEO from '../components/seo'
import image from '../../static/assets/img/404.svg'
import useTranslations from '../components/useTranslations'

const NotFound = () => {
  const { pageNotFound } = useTranslations()

  return (
    <>
      <SEO title="404: Not found" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '50px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            marginBottom: '100px',
          }}
        >
          {pageNotFound}
        </h1>
        <img src={image} alt="404 Image" />
      </div>
    </>
  )
}

export default NotFound
