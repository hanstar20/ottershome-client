import React from "react";
import naverLogo from "../../public/assets/img/naver_logo.png";
import kakaoLogo from "../../public/assets/img/kakao_logo.png";
import instagramLogo from "../../public/assets/img/instagram_logo.png";
import yotubeLogo from "../../public/assets/img/yotube_logo.png";
import shopLogo from "../../public/assets/img/shop_logo.png";
// styled components
import styled from "styled-components";

const FooterContainer = styled.div`
	background: #292929;
	height: 250px;
	display: flex;
	flex-direction: column;
`;

const LogoWrapper = styled.div`
	color: #666666;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 20px;
	padding-bottom: 20px;
`;

const LinkLogo = styled.img`
	height: 45px;
	padding: 0 10px;
`;

const ModalWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #666666;
	height: 52px;
	border-bottom: 1px solid #3b3b3b;
	font-size: 14px;

	div {
		cursor: pointer;
	}

	div:hover {
		color: #ffffff;
		font-weight: bold;
	}
`;

const InfoWrapper = styled.div`
	color: #666666;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: pre-line;
	flex-direction: column;
	font-size: 13px;

	div {
		padding-bottom: 3px;
	}
`;

const RightsWrapper = styled.div`
	color: #666666;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 10px;
	font-size: 12px;
`;

const TelWrpper = styled.span`
	position: relative;
	padding-left: 12px;
	margin-left: 12px;

	&::after {
		content: "";
		position: absolute;
		left: 0;
		top: 3px;
		width: 2px;
		height: 10px;
		background-color: #666666;
	}

	a {
		color: #666;
		text-decoration: none;
	}
`;

const Divider = styled.div`
	background-color: #666;
	width: 1px;
	height: 20px;
	margin-left: 15px;
	margin-right: 15px;
`;

export default function Footer() {
	return (
		<FooterContainer>
			<ModalWrapper>
				<div>이용약관</div>
				<Divider />
				<div>개인정보처리방침</div>
			</ModalWrapper>
			<LogoWrapper>
				<a href='https://www.youtube.com/@ottershome'>
					<LinkLogo alt='Youtube' src={yotubeLogo} />
				</a>
				<a href='https://www.instagram.com/otters.home'>
					<LinkLogo alt='Instagram' src={instagramLogo} />
				</a>
				{/* <a href="https://www.youtube.com/@ottershome">
          <LinkLogo alt="Kakao" src={kakaoLogo} />
        </a> */}
				<a href='https://cafe.naver.com/nbotter'>
					<LinkLogo alt='Naver Cafe' src={naverLogo} />
				</a>
				<a href='https://ottersshop.com/'>
					<LinkLogo alt='Naver Cafe' src={shopLogo} />
				</a>
			</LogoWrapper>
			<InfoWrapper>
				<div>
					<span>경북 경산시 한의대로 136 이웃집수달</span>
				</div>
				<div>
					<span>대표 : 서선경</span>
					<TelWrpper>
						전화 : <a href='tel:053-252-1610'>053-252-1610</a>
					</TelWrpper>
				</div>
				<div>
					<span>사업자등록번호 : 141-92-00887</span>
				</div>
			</InfoWrapper>
			<RightsWrapper>Copyright © 2023 Otter's Home. All rights reserved.</RightsWrapper>
		</FooterContainer>
	);
}
