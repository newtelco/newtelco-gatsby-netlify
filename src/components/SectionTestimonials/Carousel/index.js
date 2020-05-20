import React, { useEffect, useState, useReducer } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import * as S from './styled'

const Carousel = () => {
  let slideWidth = 0
  if (typeof window !== 'undefined' && window.outerWidth) {
    if (window.outerWidth > 500) {
      slideWidth = 600
    } else {
      slideWidth = 200
    }
  }
  return (
    <CarouselProvider
      visibleSlides={3}
      totalSlides={6}
      step={1}
      naturalSlideWidth={slideWidth}
      naturalSlideHeight={500}
      interval={5000}
      isPlaying
      infinite
      isIntrinsicHeight
    >
      <S.Wrapper>
        <Slider>
          <Slide index={0}>
            <S.Partner>
              <img src='/assets/img/partners/supermicro.svg' alt='supermicro logo' />
            </S.Partner>
          </Slide>
          <Slide index={1}>
            <S.Partner>
              <img src='/assets/img/partners/stulz.svg' alt='stulz logo' />
            </S.Partner>
          </Slide>
          <Slide index={2}>
            <S.Partner>
              <img src='/assets/img/partners/dell.svg' alt='dell logo' />
            </S.Partner>
          </Slide>
          <Slide index={3}>
            <S.Partner>
              <img src='/assets/img/partners/huawei.svg' alt='huawei logo' />
            </S.Partner>
          </Slide>
          <Slide index={4}>
            <S.Partner>
              <img src='/assets/img/partners/cisco.svg' alt='cisco logo' />
            </S.Partner>
          </Slide>
          <Slide index={5}>
            <S.Partner>
              <img src='/assets/img/partners/juniper.svg' alt='juniper logo' />
            </S.Partner>
          </Slide>
        </Slider>
      </S.Wrapper>
    </CarouselProvider>
  )
}

export default Carousel
