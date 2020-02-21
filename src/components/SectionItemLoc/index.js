import React from 'react'
import useTranslations from '../useTranslations'

import * as S from './styled'

const SectionItemLoc = props => {
  const section = props.item.parent.sourceInstanceName
  const item = props.item.fields.slug
  const locale = props.item.fields.locale
  const url = locale === 'en' ? `${section}/${item}` : `/${section}/${item}`

  return (
    <S.Wrapper>
      <S.SvgImage>
        <svg height="400px" width="340px">
          <g>
            <clipPath id="location-path">
              <path
                d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
              />
            </clipPath>
          </g>
          <image
            // height="100%"
            // width="100%"
            clip-path="url(#location-path)"
            href={props.item.frontmatter.image}
          />
        </svg>
      </S.SvgImage>
      {/* <S.HeaderImg
        clipPath="url(#location-path)"
        src={props.item.frontmatter.image}
      /> */}
      <S.Header>{props.item.frontmatter.title}</S.Header>
      {/* <S.Content>
        <div
          dangerouslySetInnerHTML={{ __html: props.item.frontmatter.short }}
        ></div>
      </S.Content> */}
    </S.Wrapper>
  )
}

export default SectionItemLoc
