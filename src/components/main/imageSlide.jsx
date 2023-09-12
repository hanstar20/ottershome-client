import React from 'react'

import styled from 'styled-components'

import Sample1 from '../../public/assets/img/main/banner_01.png'
import Sample2 from '../../public/assets/img/main/banner_02.png'
import Sample3 from '../../public/assets/img/main/banner_03.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

SwiperCore.use([Pagination]) // Use

const ImageSlideContainer = styled.div`
  /* height: 220px; */
  height: auto;
`

const SwiperContanier = styled(Swiper)`
  /* height: 220px; */

`
// 커스텀 슬라이드 컴포넌트
const CustomSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 커스텀 슬라이드 이미지 컴포넌트
const CustomSlideImage = styled.img`
  max-width: 100%; /* 이미지의 최대 너비를 100%로 설정 */
  height: 180px; /* 이미지 높이를 자동으로 조정하여 비율 유지 */
`;

// const SlideImg = styled.img`
//   object-fit: cover; /* 이미지 비율 유지를 위해 사용 */
//   /* width: 100%;  */
//   height: 180px; /* 세로 높이 100%로 설정 */
// `



export default function ImageSlide() {
  return (
    <ImageSlideContainer>
      <SwiperContanier
        className="banner"
        // slidesPerView={1}
        spaceBetween={30}
        pagination = {{
          type: 'fraction',
          clickable: true
         }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <CustomSlide>
            <CustomSlideImage src={Sample1} />
          </CustomSlide>
        </SwiperSlide>
        <SwiperSlide>
          <CustomSlide>
            <CustomSlideImage src={Sample2} />
          </CustomSlide>
        </SwiperSlide>
        <SwiperSlide>
          <CustomSlide>
            <CustomSlideImage src={Sample3} />
          </CustomSlide>
        </SwiperSlide>
      </SwiperContanier>
    </ImageSlideContainer>
  )
}
