import React from 'react'

import { Twitter } from 'styled-icons/boxicons-logos/Twitter'
import { Github } from 'styled-icons/boxicons-logos/Github'
import { Instagram } from 'styled-icons/boxicons-logos/Instagram'
import { FacebookSquare } from 'styled-icons/boxicons-logos/FacebookSquare'

import * as S from './styled'

const SocialLinks = () => {
  return (
    <S.SocialLinksList>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href='https://facebook.com/newtelco'
          title='FacebookSquare'
          rel='noopener noreferrer'
          target='_blank'
        >
          <FacebookSquare />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href='https://twitter.com/newtelcoDE'
          title='Twitter'
          rel='noopener noreferrer'
          target='_blank'
        >
          <Twitter />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href='https://instagram.com/newtelcoDE'
          title='Instagram'
          rel='noopener noreferrer'
          target='_blank'
        >
          <Instagram />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href='https://github.com/ndom91/newtelco-gatsby-netlify'
          title='Github'
          rel='noopener noreferrer'
          target='_blank'
        >
          <Github />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
    </S.SocialLinksList>
  )
}

export default SocialLinks
