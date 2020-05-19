import React from 'react'
import LocalizedLink from '../LocalizedLink'

import * as S from './styled'

const SectionItemLoc = React.forwardRef((props, ref) => {
  const section = props.item.parent.sourceInstanceName
  const item = props.item.fields.slug
  const locale = props.item.fields.locale
  const url = locale === 'en' ? `${section}/${item}` : `/${section}/${item}`

  return (
    <S.Wrapper ref={ref} className={props.inView ? 'locationInView' : ''}>
      <LocalizedLink to={url} aria-label={props.item.frontmatter.title}>
        <S.SvgImage>
          <svg height="400px" width="500px">
            <defs>
              <clipPath id="location-path" clipPathUnits="objectBoundingBox">
                {/* <path
                  d="M0.5,0 C0.224,0,0,0.156,0,0.347 C0,0.531,0.454,0.962,0.473,0.98 L0.491,0.997 C0.493,0.999,0.496,1,0.5,1 C0.504,1,0.507,0.999,0.509,0.997 L0.527,0.98 C0.546,0.962,1,0.531,1,0.347 C1,0.156,0.776,0,0.5,0 M0.5,0.223 C0.599,0.223,0.679,0.278,0.679,0.347 C0.679,0.416,0.599,0.471,0.5,0.471 C0.401,0.471,0.321,0.416,0.321,0.347 C0.321,0.278,0.401,0.223,0.5,0.223"
                /> */}
                <path d="M0.5,0 C0.224,0,0,0.156,0,0.347 C0,0.531,0.454,0.962,0.473,0.98 L0.491,0.997 C0.493,0.999,0.496,1,0.5,1 C0.504,1,0.507,0.999,0.509,0.997 L0.527,0.98 C0.546,0.962,1,0.531,1,0.347 C1,0.156,0.776,0,0.5,0 M0.5,0.223 C0.599,0.223,0.679,0.278,0.679,0.347 C0.679,0.416,0.599,0.471,0.5,0.471 C0.401,0.471,0.321,0.416,0.321,0.347 C0.321,0.278,0.401,0.223,0.5,0.223"></path>
              </clipPath>
            </defs>
            <image
              y='50%'
              x='65%'
              style={{ transform: 'scaleX(0.6)' }}
              clipPath="url(#location-path)"
              href={props.item.frontmatter.image}
            />
          </svg>
        </S.SvgImage>
      </LocalizedLink>
      <S.Header>
        {props.item.frontmatter.title.substr(0, 3).toUpperCase()}
      </S.Header>
    </S.Wrapper>
  )
})

export default SectionItemLoc
