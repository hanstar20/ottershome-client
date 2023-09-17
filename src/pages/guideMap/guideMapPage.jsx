import React from "react";

import styled from "styled-components";

import GuideTable from "../..//components/guideMap/guideTable";
import Map from "../../public/assets/img/guide_map/guide_map.png";

const ContentContainer = styled.div`
	background: #ffffff;
`;

const ContentWrapper = styled.div`
	height: auto;
	display: flex;
	flex-direction: column;
`;

const ContentTitle = styled.div`
	display: flex;
	justify-content: center;
	margin: 3.02vw 0 4.5317vw 0;
	font-size: 6vw;
	font-weight: bold;
	position: relative;

	&::before {
		height: 0.35vw;
		background: #000000;
		margin: 3.5vw 1.5vw;
		width: 8vw;
		content: "";
	}

	&::after {
		height: 0.35vw;
		background: #000000;
		margin: 3.5vw 1.5vw;
		width: 8vw;
		content: "";
	}
`;

const ContentBody = styled.div`
	margin: 3.02vw 4.53vw;
	display: flex;
	flex-direction: column;
`;

const GuideMapImg = styled.img``;

export default function GuideMap() {
	return (
		<ContentContainer>
			<ContentWrapper>
				<ContentTitle>가이드맵</ContentTitle>
				<ContentBody>
					<GuideMapImg alt='guide-map' src={Map} />
					<GuideTable />
				</ContentBody>
			</ContentWrapper>
		</ContentContainer>
	);
}
