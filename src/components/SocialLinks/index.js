import React from 'react'

import { Twitter } from 'styled-icons/boxicons-logos/Twitter'
import { Github } from 'styled-icons/boxicons-logos/Github'

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
          href="https://twitter.com/newtelco"
          title="Twitter"
          target="_blank"
        >
          <Twitter />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
    </S.SocialLinksList>
  )
}

export default SocialLinks
