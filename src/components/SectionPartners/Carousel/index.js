import React from 'react'
import Marquee, { Motion, randomIntFromInterval } from 'react-marquee-slider'
import logoDell from '../../../../static/assets/img/partners/dell.svg'
import logoSupermicro from '../../../../static/assets/img/partners/supermicro.svg'
import logoCisco from '../../../../static/assets/img/partners/cisco.svg'
import logoStulz from '../../../../static/assets/img/partners/stulz.svg'
import logoHuawei from '../../../../static/assets/img/partners/huawei.webp'
import logoJuniper from '../../../../static/assets/img/partners/juniper.svg'
import logoEci from '../../../../static/assets/img/partners/eci.png'
import logoEltek from '../../../../static/assets/img/partners/eltek.webp'
import logoAmsix from '../../../../static/assets/img/partners/amsix.webp'
import logoDecix from '../../../../static/assets/img/partners/decix.webp'

import * as S from './styled'
import times from 'lodash.times'

const icons = [
  logoDell,
  logoSupermicro,
  logoCisco,
  logoStulz,
  logoHuawei,
  logoJuniper,
  logoEci,
  logoEltek,
  logoAmsix,
  logoDecix
]

const Carousel = React.memo(({ size }) => {
  const width = window.outerWidth

  let scale = 0.5

  if (width > 800) {
    scale = 0.65
  }

  if (width > 1100) {
    scale = 0.8
  }

  if (width > 1400) {
    scale = 1
  }

  return (
    <S.FullWidth>
      <S.Height height={700}>
        <Marquee
          key='1'
          velocity={18}
          scatterRandomly
          minScale={0.7}
          resetAfterTries={200}
        >
          {times(10, Number).map(id => (
            <Motion
              key={`marquee-example-company-${id}`}
              initDeg={randomIntFromInterval(0, 360)}
              direction={Math.random() > 0.5 ? 'clockwise' : 'counterclockwise'}
              velocity={10}
              radius={scale * 70}
            >
              <S.Company scale={scale}>
                <S.Circle scale={scale}>
                  <S.Logo src={icons[id]} alt='' />
                </S.Circle>
              </S.Company>
            </Motion>
          ))}
        </Marquee>
      </S.Height>
    </S.FullWidth>
  )
})

export default Carousel
