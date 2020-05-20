import React from 'react'
import useMenu from '../../useMenu'

import * as S from './styled'

const Navigation = ({ isActive, handleToggleMenu, isPartiallyCurrent }) => {
  const menuItems = useMenu()

  const closeMenu = () => {
    if (isActive) {
      handleToggleMenu()
    }
  }

  return (
    <>
      <S.Navigation style={isActive ? { display: 'none' } : {}}>
        {menuItems.map(menu => (
          <S.NavigationLink
            to={menu.link}
            key={menu.name}
            partiallyActive={
              typeof window !== 'undefined' &&
                window.location.pathname.includes(menu.name.toLowerCase())
                ? true
                : false
            }
            aria-label={menu.name}
            activeClassName="active"
            onClick={() => closeMenu()}
          >
            {menu.name}
          </S.NavigationLink>
        ))}
      </S.Navigation>
    </>
  )
}

export default Navigation
