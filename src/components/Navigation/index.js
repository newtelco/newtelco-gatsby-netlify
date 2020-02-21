import React from 'react'
import useMenu from '../useMenu'

import * as S from './styled'

const Navigation = ({ isActive, handleToggleMenu }) => {
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
