import React from 'react'
import useMenu from '../useMenu'
import newtelcoLogo from '../../images/newtelco-white.png'

import * as S from './styled'

const OverlayMenu = ({ toggleMenu, isActive }) => {
  const menuItems = useMenu()

  return (
    <S.OverlayWrapper className={isActive ? 'active' : ''}>
      <S.HeaderImage src={newtelcoLogo} alt="Newtelco Logo" />
      <S.Navigation>
        <ul>
          {menuItems.map(menu => (
            <li>
              <S.NavigationLink
                to={menu.link}
                key={menu.name}
                aria-label={menu.name}
                activeClassName="active"
                onClick={toggleMenu}
              >
                {menu.name}
              </S.NavigationLink>
            </li>
          ))}
        </ul>
      </S.Navigation>
      <S.ShapeOverlays
        class="shape-overlays"
        id="shape-overlays"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path class="shape-overlays__path"></path>
        <path class="shape-overlays__path"></path>
        <path class="shape-overlays__path"></path>
      </S.ShapeOverlays>
    </S.OverlayWrapper>
  )
}

export default OverlayMenu
