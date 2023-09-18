import React from "react";

import styled from "styled-components";

import logo from "../../public/assets/img/main/otters_home_youtbe_logo.jpeg";

import YouTube from "react-youtube";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/swiper.scss";
// import 'swiper/components/navigation/navigation.scss'
import "../../styles/main/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]); // Use

const ImageSlideContainer = styled.div`
	/* height: 100%; */
	margin-bottom: 9.64vw;
	margin-left: 2.6vw;
	margin-right: 2.6vw;
`;

const SwiperWrapper = styled.div``;

const TitleWrapper = styled.div`
	display: flex;
	margin-bottom: 3.13vw;
	align-items: center;
	justify-content: center;

	span {
		padding-left: 2vw;
		font-size: 5vw;
		font-family: "GasoekOne";
		color: #4b6d7b;
	}
`;

const Logo = styled.img`
	margin-left: 1.3vw;
	height: 6.51vw;
	border-radius: 3.26vw;
`;

const SlideVideo = styled.div`
	iframe {
		height: 50vw;
		width: 100%;
	}
`;

export default function VideoSlide() {
	const youtubeUrl = [
		"elAH9sw70wU",
		"tNcTMcQm4uk",
		"pFmL4vKG7PA",
		"d1OUzBywCLc",
		"_C3qoi9cMWA",
		"ScoEVNy0b0w",
		"2mnoU11cyvo",
		"IagHVUiRdPY",
	];

	return (
		<ImageSlideContainer>
			<TitleWrapper>
				<span>YOUTUBE</span>
				<Logo src={logo} />
			</TitleWrapper>
			<SwiperWrapper>
				<Swiper className='banner' slidesPerView={1} loop={true} navigation>
					{youtubeUrl.map((slide, index) => (
						<SwiperSlide key={index}>
							<SlideVideo>
								<YouTube
									videoId={slide}
									onEnd={(e) => {
										e.target.stopVideo(0);
									}}
								/>
							</SlideVideo>
						</SwiperSlide>
					))}
				</Swiper>
			</SwiperWrapper>
		</ImageSlideContainer>
	);
}
