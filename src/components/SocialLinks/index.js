import React from 'react'

import { Twitter } from 'styled-icons/boxicons-logos/Twitter'
import { Github } from 'styled-icons/boxicons-logos/Github'
import { Instagram } from 'styled-icons/boxicons-logos/Instagram'
import { Facebook } from 'styled-icons/boxicons-logos/Facebook'

import * as S from './styled'

const SocialLinks = () => {
  return (
    <S.SocialLinksList>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://github.com/ndom91/newtelco-gatsby-netlify"
          title="Github"
          target="_blank"
        >
          <Github />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://twitter.com/newtelcoDE"
          title="Twitter"
          target="_blank"
        >
          <Twitter />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://facebook.com/newtelco"
          title="Facebook"
          target="_blank"
        >
          <Facebook />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://instagram.com/newtelcoDE"
          title="Instagram"
          target="_blank"
        >
          <Instagram />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
    </S.SocialLinksList>
  )
}

export default SocialLinks
