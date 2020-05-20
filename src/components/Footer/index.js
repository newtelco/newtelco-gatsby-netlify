import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import useTranslations from '../useTranslations'
import SocialLinks from './SocialLinks'
import MapDots from './MapDots'
import LocalizedLink from '../LocalizedLink'
import uniqBy from 'lodash.uniqby'

import * as S from './styled'

const Footer = () => {
  const {
    aboutProject,
    maintainedBy,
    products,
    services,
    location,
    contact,
    about,
    company,
    legalNotice,
    privacyPolicy
  } = useTranslations()

  const { allMarkdownRemark } = useStaticQuery(query)
  const simplified = allMarkdownRemark.nodes.map(item => {
    return {
      title: item.frontmatter.title,
      slug: item.fields.slug,
      section: item.fields.section
    }
  })

  const links = uniqBy(simplified, 'slug')
  const productsItems = links.filter(link => link.section === 'Products')
  const servicesItems = links.filter(link => link.section === 'Services')
  const locationItems = links.filter(link => link.section === 'Location')

  return (
    <S.FooterWrapper>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='#eaeaea'
        viewBox='0 0 1920 222.29'
        style={{
          transform: 'translateY(1px)'
        }}
      >
        <g>
          <g>
            <path
              fill='#eaeaea'
              d='M0,222.29S547.82,11.93,1248.06.64C1867.75-9.36,1920,101.3,1920,101.3v121Z'
             />
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
            <LocalizedLink to='/about'> {about} </LocalizedLink>
            <LocalizedLink to='/legal'> {legalNotice} </LocalizedLink>
            <LocalizedLink to='/privacy'> {privacyPolicy} </LocalizedLink>
            <LocalizedLink to='/contact'> {contact} </LocalizedLink>
            <a href='https://is.newtelco.online' target='_blank' rel='noopener noreferrer'>Status</a>
          </S.FooterLinkSection>
        </S.FooterLinkContainer>
        <S.FooterBottomContainer>
          <p>{aboutProject}</p>
          <p
            style={{
              textAlign: 'right',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <svg
              fill='currentColor'
              viewBox='0 0 20 20'
              class='w-8 h-8'
              width='16'
              height='16'
            >
              <path
                fill-rule='evenodd'
                d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
                clip-rule='evenodd'
               />
            </svg>
            <S.MaintainerLink
              rel='noopener noreferrer'
              href='mailto:ndomino@newtelco.de'
              target='_blank'
            >
              ndomino
            </S.MaintainerLink>
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
