import React from "react";

import styled from "styled-components";

import ImageSlide from "../../components/main/imageSlide";
import FastMenu from "../../components/main/fastMenu";
import VideoSlide from "../../components/main/videoSlide";

const ContentContainer = styled.div`
	background: #ffffff;
`;

const ContentWrapper = styled.div``;

export default function MainContent() {
	return (
		<ContentContainer>
			<ContentWrapper>
				<ImageSlide />
			</ContentWrapper>
			<ContentWrapper>
				<FastMenu />
			</ContentWrapper>
			<ContentWrapper>
				<VideoSlide />
			</ContentWrapper>
		</ContentContainer>
	);
}
