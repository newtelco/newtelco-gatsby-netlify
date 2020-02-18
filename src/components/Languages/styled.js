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

  list-style: none;
  position: relative;

  & > ul {
    display: none;
    position: absolute;
    top: 28px; /* the height of the main nav */
  }
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

  &:hover {
    display: inherit;
  }
`

export const LanguageItemDropdown = styled.li`
  display: list-item;

  width: 80px;
  float: none;
  display: list-item;
  position: relative;
`

export const LanguageItem = styled.li`
  margin-left: var(--space-sm);
  display: inline-block;

  &:hover ~ ul {
    cursor: pointer;
    display: inherit;
  }
`

export const LanguageLink = styled(Link)`
  display: inline-block;
  margin-right: 0.5rem;
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
