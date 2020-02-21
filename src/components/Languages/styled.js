import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const LanguageWrapper = styled.ul`
  display: flex;
  position: absolute;
  top: var(--space-sm);
  right: var(--space-sm);
  ${media.greaterThan('medium')`
    margin-left: 0;
    position: relative;
    top: 0;
    right: 0;
  `}
  transition: visibility 250ms, opacity 250ms ease-in-out;

  list-style: none;
  position: relative;

  & > ul {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 28px; /* the height of the main nav */
  }

  ${media.lessThan('medium')`
    display: none;

    &.active {
      display: inline-block;
    }
  `}
`

export const LanguageImage = styled.img`
  width: 40px;
  color: #67b246;

  &:hover {
    cursor: pointer;
  }
`

export const LanguageChoiceWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--body-bg);
  border-radius: 0 0 5px 5px;
  padding: 10px 0px;
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.1);
  transition: visibility 250ms ease-in-out 250ms,
    opacity 250ms ease-in-out 250ms;

  &:hover,
  &.active {
    visibility: visible;
    opacity: 1;
  }

  &.active {
    flex-direction: row;
    top: -60px;
    left: calc(50% - 55px);
  }
`

export const LanguageItemDropdown = styled.li`
  display: list-item;

  width: 60px;
  float: none;
  display: list-item;
  position: relative;
`

export const LanguageItem = styled.li`
  margin-left: var(--space-sm);
  display: inline-block;
  transition: visibility 150ms, opacity 150ms ease-in-out;

  &:hover ~ ul {
    cursor: pointer;
    opacity: 1;
    visibility: visible;
  }

  &.active {
    display: none;
  }
`

export const LanguageLink = styled(Link)`
  display: inline-block;
  color: var(--grayColor);
  font-size: 1.4rem;
  margin: 4px;

  display: block;
  padding: 0 10px;
  color: #fff;
  font-size: 20px;
  line-height: 60px;
  text-decoration: none;
`

export const CountryImage = styled.img`
  width: 32px;
  margin-right: 0px !important;
`
