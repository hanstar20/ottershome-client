import React from 'react'

import styled from 'styled-components'

import logo from '../../public/assets/img/main/otters_home_youtbe_logo.jpeg'

import YouTube from 'react-youtube'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper'
import 'swiper/swiper.scss'
// import 'swiper/components/navigation/navigation.scss'
import '../../styles/main/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

SwiperCore.use([Navigation, Pagination, Autoplay]) // Use

const ImageSlideContainer = styled.div`
  /* height: 100%; */
  margin-bottom: 6vw;
  margin-left: 20px;
  margin-right: 20px;
`

const SwiperWrapper = styled.div``

const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 3vw;
  align-items: center;

  span {
    padding-left: 2vw;
    font-size: 5vw;
    font-weight: bold;
  }
`

const Logo = styled.img`
  height: 10vw;
  border-radius: 10vw;
`

const SlideVideo = styled.div`
  iframe {
    /* width: 100vw; */
    height: 50vw;
    width: 100%;
  }
`

export default function VideoSlide() {
  return (
    <ImageSlideContainer>
      <TitleWrapper>
        <Logo src={logo} />
        <span>이웃집수달 Otter’s Home</span>
      </TitleWrapper>
      <SwiperWrapper>
        <Swiper
          className="banner"
          slidesPerView={1}
          loop={true}
          navigation
          // pagination={{
          //   dynamicBullets: true,
          // }}
        >
          <SwiperSlide>
            <SlideVideo>
              <YouTube
                videoId={'pFmL4vKG7PA'}
                onEnd={e => {
                  e.target.stopVideo(0)
                }}
              />
            </SlideVideo>
          </SwiperSlide>
          <SwiperSlide>
            <SlideVideo>
              <YouTube
                videoId={'pFmL4vKG7PA'}
                onEnd={e => {
                  e.target.stopVideo(0)
                }}
              />
            </SlideVideo>
          </SwiperSlide>
          <SwiperSlide>
            <SlideVideo>
              <YouTube
                videoId={'pFmL4vKG7PA'}
                onEnd={e => {
                  e.target.stopVideo(0)
                }}
              />
            </SlideVideo>
          </SwiperSlide>
        </Swiper>
      </SwiperWrapper>
    </ImageSlideContainer>
  )
}
