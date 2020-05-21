import React from 'react'
import language from '../../../images/language-solid.svg'
import * as S from './styled'

const Languages = props => {
  const setLanguage = lang => {
    typeof window !== 'undefined' &&
      window.localStorage.setItem('nt_lang', lang)
  }
  return (
    <S.LanguageWrapper className={props.isActive ? 'active' : ''}>
      <S.LanguageItem className={props.isActive ? 'active' : ''}>
        <S.LanguageImage src={language} alt='Language' />
      </S.LanguageItem>
      <S.LanguageChoiceWrapper className={props.isActive ? 'active' : ''}>
        <S.LanguageItemDropdown>
          <S.LanguageLink
            to='/'
            hrefLang='en'
            onClick={() => setLanguage('en-GB')}
          >
            🇬🇧
          </S.LanguageLink>
        </S.LanguageItemDropdown>
        <S.LanguageItemDropdown>
          <S.LanguageLink
            to='/de'
            hrefLang='de'
            onClick={() => setLanguage('de')}
          >
            🇩🇪
          </S.LanguageLink>
        </S.LanguageItemDropdown>
        <S.LanguageItemDropdown>
          <S.LanguageLink
            to='/ru'
            hrefLang='ru'
            onClick={() => setLanguage('ru')}
          >
            🇷🇺
          </S.LanguageLink>
        </S.LanguageItemDropdown>
      </S.LanguageChoiceWrapper>
    </S.LanguageWrapper>
  )
}

export default Languages
