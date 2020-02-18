import React from 'react'

import * as S from './styled'

const Languages = () => {
  return (
    <S.LanguageWrapper>
      <S.LanguageItem>
        <S.LanguageLink to="/" hrefLang="en">
          English
        </S.LanguageLink>
      </S.LanguageItem>
      <S.LanguageItem>
        <S.LanguageLink to="/de" hrefLang="de">
          Deutsch
        </S.LanguageLink>
      </S.LanguageItem>
    </S.LanguageWrapper>
  )
}

export default Languages
