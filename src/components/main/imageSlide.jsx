import React from "react";

import styled from "styled-components";

import Sample1 from "../../public/assets/img/main/banner_01.png";
import Sample2 from "../../public/assets/img/main/banner_02.png";
import Sample3 from "../../public/assets/img/main/banner_03.png";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
// import '../../styles/main/pagination.scss'

SwiperCore.use([Navigation, Pagination, Autoplay]); // Use

const ImageSlideContainer = styled.div`
	height: 100%;
`;

const SlideImg = styled.img`
	width: 100%;
	object-fit: cover;
`;

export default function ImageSlide() {
	return (
		<ImageSlideContainer>
			<Swiper
				className='banner'
				slidesPerView={1}
				loop={true}
				// navigation
				pagination={{
					dynamicBullets: true,
				}}>
				<SwiperSlide>
					<SlideImg src={Sample1}></SlideImg>
				</SwiperSlide>
				<SwiperSlide>
					<SlideImg src={Sample2}></SlideImg>
				</SwiperSlide>
				<SwiperSlide>
					<SlideImg src={Sample3}></SlideImg>
				</SwiperSlide>
			</Swiper>
		</ImageSlideContainer>
	);
}
