import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import useTranslations from '../useTranslations'
import SocialLinks from '../SocialLinks'
import MapDots from '../MapDots'
import LocalizedLink from '../LocalizedLink'
import uniqBy from 'lodash.uniqby'

import * as S from './styled'

const Footer = () => {
  const {
    aboutProject,
    seeMorePWA,
    maintainedBy,
    products,
    services,
    location,
    contact,
    team,
    about,
    company,
  } = useTranslations()

  const { allMarkdownRemark } = useStaticQuery(query)
  const simplified = allMarkdownRemark.nodes.map(item => {
    return {
      title: item.frontmatter.title,
      slug: item.fields.slug,
      section: item.fields.section,
    }
  })

  const links = uniqBy(simplified, 'slug')
  const productsItems = links.filter(link => link.section === 'products')
  const servicesItems = links.filter(link => link.section === 'services')
  const locationItems = links.filter(link => link.section === 'location')

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
            <S.FooterLinkSectionHeader>{products}</S.FooterLinkSectionHeader>
            {productsItems.map(prod => {
              return (
                <LocalizedLink key={prod.slug} to={prod.slug}>
                  {prod.title}
                </LocalizedLink>
              )
            })}
          </S.FooterLinkSection>
          <S.FooterLinkSection>
            <S.FooterLinkSectionHeader>{services}</S.FooterLinkSectionHeader>
            {servicesItems.map(service => {
              return (
                <LocalizedLink key={service.slug} to={service.slug}>
                  {service.title}
                </LocalizedLink>
              )
            })}
          </S.FooterLinkSection>
          <S.FooterLinkSection>
            <S.FooterLinkSectionHeader>{location}</S.FooterLinkSectionHeader>
            {locationItems.map(loc => {
              return (
                <LocalizedLink key={loc.slug} to={loc.slug}>
                  {loc.title}
                </LocalizedLink>
              )
            })}
          </S.FooterLinkSection>
          <S.FooterLinkSection>
            <S.FooterLinkSectionHeader>{company}</S.FooterLinkSectionHeader>
            <LocalizedLink to="/about"> {about} </LocalizedLink>
            <LocalizedLink to="/contact"> {contact} </LocalizedLink>
            <LocalizedLink to="/team"> {team} </LocalizedLink>
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
          <p style={{ textAlign: 'right' }}>
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

const query = graphql`
  query FooterEntries {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "section" } } }
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          section
          slug
        }
      }
    }
  }
`
