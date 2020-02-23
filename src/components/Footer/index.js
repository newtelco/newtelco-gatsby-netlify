import React from 'react'
import useTranslations from '../useTranslations'
import SocialLinks from '../SocialLinks'
import MapDots from '../MapDots'

import * as S from './styled'

const Footer = () => {
  const {
    aboutProject,
    seeMorePWA,
    maintainedBy,
    contributeMessage,
  } = useTranslations()

  return (
    <S.FooterWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#eaeaea"
        viewBox="0 0 1920 222.29"
        style={{
          transform: 'translateY(1px)',
        }}
      >
        <g>
          <g>
            <path
              fill="#eaeaea"
              d="M0,222.29S547.82,11.93,1248.06.64C1867.75-9.36,1920,101.3,1920,101.3v121Z"
            ></path>
          </g>
        </g>
      </svg>
      <S.FooterContainer>
        <MapDots />
        <S.FooterLinkContainer>
          <S.FooterLinkSection>
            <SocialLinks />
          </S.FooterLinkSection>
          <S.FooterLinkSection>
            <S.FooterLinkSectionHeader>Newtelco</S.FooterLinkSectionHeader>
            <a href="#">Newtelco Link 1</a>
            <a href="#">Newtelco Link 2</a>
            <a href="#">Newtelco Link 3</a>
            <a href="#">Newtelco Link 4</a>
          </S.FooterLinkSection>
          <S.FooterLinkSection>
            <S.FooterLinkSectionHeader>Products</S.FooterLinkSectionHeader>
            <a href="#">Newtelco Link 1</a>
            <a href="#">Newtelco Link 2</a>
            <a href="#">Newtelco Link 3</a>
            <a href="#">Newtelco Link 4</a>
          </S.FooterLinkSection>
          <S.FooterLinkSection>
            <S.FooterLinkSectionHeader>Services</S.FooterLinkSectionHeader>
            <a href="#">Newtelco Link 1</a>
            <a href="#">Newtelco Link 2</a>
            <a href="#">Newtelco Link 3</a>
            <a href="#">Newtelco Link 4</a>
          </S.FooterLinkSection>
          <S.FooterLinkSection>
            <S.FooterLinkSectionHeader>About Us</S.FooterLinkSectionHeader>
            <a href="#">Newtelco Link 1</a>
            <a href="#">Newtelco Link 2</a>
            <a href="#">Newtelco Link 3</a>
            <a href="#">Newtelco Link 4</a>
          </S.FooterLinkSection>
        </S.FooterLinkContainer>
        <S.FooterBottomContainer>
          <p>
            {aboutProject}{' '}
            <a
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
              target="_blank"
            >
              {seeMorePWA}
            </a>
            .
          </p>
          <p>
            {maintainedBy}{' '}
            <a
              rel="noopener noreferrer"
              href="mailto:ndomino@newtelco.de"
              target="_blank"
            >
              ndomino
            </a>
            .
          </p>
        </S.FooterBottomContainer>
      </S.FooterContainer>
    </S.FooterWrapper>
  )
}

export default Footer
