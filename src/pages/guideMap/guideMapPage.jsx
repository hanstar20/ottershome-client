import React from "react";

import styled from "styled-components";

const ContentContainer = styled.div`
	background: #ffffff;
	min-height: 800px;
`;

const ContentWrapper = styled.div`
	height: 100vw;
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

export default function GuideMap() {
	return (
		<ContentContainer>
			<ContentWrapper>
				<ContentTitle>가이드맵</ContentTitle>
				<h1>가이드맵</h1>
				<h1>페이지 준비중입니다.</h1>
			</ContentWrapper>
		</ContentContainer>
	);
}
