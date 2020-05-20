import React from 'react'
import useTranslations from '../../useTranslations'
import { Link } from 'gatsby'
import { Send, Phone, Inbox } from 'react-feather'

import * as S from './styled'

const TitleAction = props => {
  const { phoneNumber, emailAddress, contactAction } = useTranslations()

  return (
    <S.Wrapper>
      <div>
        <S.TextWrapper>
          <S.Text>
            <Phone color="#67b246" size={20} style={{ marginBottom: '-3px' }} />
          </S.Text>{' '}
          <S.TextValue>{phoneNumber}</S.TextValue>
        </S.TextWrapper>
        <S.TextWrapper>
          <S.Text>
            <Inbox color="#67b246" size={20} style={{ marginBottom: '-4px' }} />
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
