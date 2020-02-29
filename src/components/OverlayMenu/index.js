import React from 'react'
import useMenu from '../useMenu'
import Languages from '../Languages'
import newtelcoLogo from '../../images/newtelco-white.png'

import * as S from './styled'

const OverlayMenu = ({ toggleMenu, isActive }) => {
  const menuItems = useMenu()

  return (
    <S.OverlayWrapper className={isActive ? 'active' : ''}>
      <S.HeaderImage src={newtelcoLogo} alt="Newtelco Logo" />
      <S.Navigation>
        <ul className={isActive ? 'active' : ''}>
          {menuItems.map((menu, index) => (
            <li key={menu.name}>
              <S.NavNumber>{`0${index + 1}`}</S.NavNumber>
              <S.NavigationLink
                to={menu.link}
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
      <Languages isActive={isActive} />
      <S.ShapeOverlays
        className="shape-overlays"
        id="shape-overlays"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path className="shape-overlays__path"></path>
        <path className="shape-overlays__path"></path>
        <path className="shape-overlays__path"></path>
      </S.ShapeOverlays>
    </S.OverlayWrapper>
  )
}

export default OverlayMenu
