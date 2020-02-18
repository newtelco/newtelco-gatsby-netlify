import React from 'react'
import language from '../../images/language-solid.svg'
import * as S from './styled'

const Languages = () => {
  return (
    <S.LanguageWrapper>
      <S.LanguageItem>
        <S.LanguageImage src={language} alt="Language" />
      </S.LanguageItem>
      <S.LanguageChoiceWrapper>
        <S.LanguageItemDropdown>
          <S.LanguageLink to="/" hrefLang="en">
            <S.CountryImage
              src="https://www.countryflags.io/us/shiny/32.png"
              alt="Language EN"
            />
          </S.LanguageLink>
        </S.LanguageItemDropdown>
        <S.LanguageItemDropdown>
          <S.LanguageLink to="/de" hrefLang="de">
            <S.CountryImage
              src="https://www.countryflags.io/de/shiny/32.png"
              alt="Language DE"
            />
          </S.LanguageLink>
        </S.LanguageItemDropdown>
      </S.LanguageChoiceWrapper>
    </S.LanguageWrapper>
  )
}

export default Languages
