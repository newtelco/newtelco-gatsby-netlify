import React from 'react'
import useTranslations from '../useTranslations'
import { Link } from 'gatsby'
import { Send, Phone, Inbox } from 'react-feather'

import * as S from './styled'

const TitleAction = props => {
  const {
    phone,
    email,
    phoneNumber,
    emailAddress,
    contactAction,
  } = useTranslations()

  const VIEWPORT_MOBILE = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 769) return true
    return false
  }

  return (
    <S.Wrapper>
      <div>
        <S.TextWrapper>
          <S.Text>
            {VIEWPORT_MOBILE ? (
              <Phone color="#67b246" size={20} />
            ) : (
              `${phone}:`
            )}
          </S.Text>{' '}
          <S.TextValue>{phoneNumber}</S.TextValue>
        </S.TextWrapper>
        <S.TextWrapper>
          <S.Text>
            {VIEWPORT_MOBILE ? (
              <Inbox color="#67b246" size={20} />
            ) : (
              `${email}:`
            )}
          </S.Text>{' '}
          <S.TextValue>{emailAddress}</S.TextValue>
        </S.TextWrapper>
      </div>
      <Link to="/contact" style={{ textDecoration: 'none' }}>
        <S.Button>
          {contactAction}
          <S.ButtonIcon>
            <Send color="white" />
          </S.ButtonIcon>
        </S.Button>
      </Link>
    </S.Wrapper>
  )
}

export default TitleAction
