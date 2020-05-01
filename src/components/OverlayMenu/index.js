import React from 'react'
import useMenu from '../useMenu'
import Languages from '../Languages'
import newtelcoLogo from '../../images/newtelco-white.png'
import { motion, useMotionValue, useTransform } from 'framer-motion'

import * as S from './styled'

const OverlayMenu = ({ toggleMenu, isActive }) => {
  const menuItems = useMenu()
  const x = useMotionValue(10)
  const y = useTransform(x, value => value * 2)

  const list = {
    visible: {
      opacity: [0, 1],
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.25,
        type: 'inertia'
      }
    }
  }
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      x: [-50, 0],
      opacity: [0, 1],
      transition: {
        duration: 0.25
      }
    }
  }
  return (
    <S.OverlayWrapper className={isActive ? 'active' : 'hidden'}>
      <S.HeaderImage src={newtelcoLogo} alt="Newtelco Logo" />
      <S.Navigation>
        <ul className={isActive ? 'active' : ''}>
          <motion.div
            style={{ x, y }}
            animate={isActive ? 'visible' : 'hidden'}
            variants={list}
          >
            {menuItems.map((menu, index) => (
              <motion.div
                initial="hidden"
                variants={variants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                key={index}
              >
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
              </motion.div>
            ))}
          </motion.div>
        </ul>
      </S.Navigation>
      <Languages isActive={isActive} />
      {/* <S.ShapeOverlays
        className="shape-overlays"
        id="shape-overlays"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path className="shape-overlays__path"></path>
        <path className="shape-overlays__path"></path>
        <path className="shape-overlays__path"></path>
      </S.ShapeOverlays> */}
    </S.OverlayWrapper>
  )
}

export default OverlayMenu
