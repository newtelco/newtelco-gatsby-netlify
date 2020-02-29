import styled from 'styled-components'
import media from 'styled-media-query'

export const RacksWrapper = styled.div`
  position: relative;
  &::before {
    position: absolute;
    height: 720px;
    opacity: 0.1;
    content: '';
    background: linear-gradient(to right, #8cbf86, #66b4a6, #408ca3);

    z-index: -1;
    top: -30px;
    border-radius: 60px;
    transform: skew(0deg, -10deg) translateX(53%);
    left: auto;
    right: 50%;
  }
  ${media.lessThan('medium')`
    &::before {
      width: 100%;
      height: 720px
    }
  `}
  ${media.greaterThan('medium')`
    &::before {
      width: 130%;
    }
  `}
`

export const RacksForm = styled.form`
  ${media.lessThan('medium')`
    max-width: 80%;
    margin: 0 auto;
  `}
`

export const InputWrapper = styled.div`
  margin: 15px;
`

export const InputHeader = styled.div`
  font-size: 3rem;
  font-family: var(--font-face-serif);
  text-align: center;
  margin-bottom: 10px;
`

export const InputLabel = styled.span`
  font-family: var(--font-face-serif);
  font-size: 1.7rem;
  margin-right: 5px;
  margin-bottom: 15px;
`

export const InputField = styled.input`
  width: 100%;
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  min-height: 38px;
  outline: 0 !important;
  color: hsl(0, 0%, 20%);
  font-size: 17px;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 10px;

  &:disabled {
    background-color: #eae9e9;
  }

  &.available,
  &.requested {
    font-size: 3rem;
    font-family: var(--font-face-serif);
    text-align: center;
    margin: 0 auto;
  }
  &.available {
    margin-top: 10px;
    width: 64px;
    height: 64px;
    border-radius: 10px;
    border: 2px solid #67b246;
  }
  &.requested {
    margin-top: 10px;
    margin-right: 0px;
    width: 64px;
    height: 64px;
    border-radius: 10px 0 0 10px;
    border: 2px solid #67b246;
  }
`

export const RacksCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 10px;

  & span {
    margin-bottom: 0px;
    text-align: center;
  }
  & input {
    margin-top: 10px;
  }
`

export const RequestedInputWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const RequestedInputBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const RequestedBtn = styled.button`
  height: 32px;
  width: 32px;
  background-color: #67b246;
  border: 1px solid #67b246;
  &:nth-child(1) {
    border-radius: 0 5px 0 0;
  }
  &:nth-child(2) {
    border-radius: 0 0 5px 0;
  }
`

export const ErrorWrapper = styled.div`
  color: red;
  font-family: var(--font-face-san-serif);
  font-weight: 100;
  font-size: 1.5rem;
`

export const SubmitBtn = styled.button`
  width: 100%;
  font-family: var(--font-face-serif);
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  background-color: #67b247;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  padding: 10px;
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
`
