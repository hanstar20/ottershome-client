import React from "react";

import KakaoMap from "../../components/public/kakaoMap";
import styled from "styled-components";

import gps from "../../public/assets/img/directions/gps.png";
import route from "../../public/assets/img/directions/route.png";
import phone from "../../public/assets/img/directions/phone.png";
import kakaoMap from "../../public/assets/img/directions/kakao_map.png";
import naverMap from "../../public/assets/img/directions/naver_map.png";

const ContentContainer = styled.div`
	padding: 0 3.02vw 4.5317vw 3.02vw;
	background: #ffffff;
	min-width: 300px;
`;

const ContentWrapper = styled.div`
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
	padding: 4.23vw 4.53vw 0 4.53vw;
`;

const BodyRow = styled.div`
	padding-bottom: 2.11vw;
	height: 6.04vw;
	display: flex;

	& > div:first-child {
		width: 17.37vw;
		display: flex;
		align-items: center;
	}

	& > div:last-child {
		padding-left: 1.81vw;
		width: auto;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
`;

const RowLogo = styled.img`
	height: 5.29vw;
`;

const RowTitle = styled.span`
	margin-left: 2.27vw;
	font-size: 3.47vw;
	font-weight: bolder;
`;

const RowContent = styled.span`
	font-size: 3.02vw;
	font-weight: 400;
`;

const LinkLogo = styled.img`
	height: 7.55vw;
`;

const LinkLogoNaver = styled.img`
	margin-left: 3.02vw;
	height: 7.55vw;
	background-color: #75ed55;
	border-radius: 0.76vw;
`;

export default function Directions() {
	return (
		<ContentContainer>
			<ContentWrapper>
				<ContentTitle>오시는 길</ContentTitle>
				<KakaoMap />
				<ContentBody>
					<BodyRow>
						<div>
							<RowLogo alt='gps' src={gps} />
							<RowTitle>주소</RowTitle>
						</div>
						<div>
							<RowContent>경북 경산시 한의대로 136 이웃집수달</RowContent>
						</div>
					</BodyRow>
					<BodyRow>
						<div>
							<RowLogo alt='phone' src={phone} />
							<RowTitle>전화</RowTitle>
						</div>
						<div>
							<RowContent>0507-1303-1610</RowContent>
						</div>
					</BodyRow>
					<BodyRow>
						<div>
							<RowLogo alt='route' src={route} />
							<RowTitle>길찾기</RowTitle>
						</div>
						<div>
							<a href='https://map.kakao.com/link/map/45889924'>
								<LinkLogo alt='kakao' src={kakaoMap} />
							</a>
							<a href='https://naver.me/FxLX00Ao'>
								<LinkLogoNaver alt='naver' src={naverMap} />
							</a>
						</div>
					</BodyRow>
				</ContentBody>
			</ContentWrapper>
		</ContentContainer>
	);
}
