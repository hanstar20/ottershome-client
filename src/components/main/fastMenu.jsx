import React from "react";
import { Link } from "react-router-dom";
import infoMenu from "../../public/assets/img/main/save_time.png";
import trafficMenu from "../../public/assets/img/main/navigation.png";
import guideMenu from "../../public/assets/img/main/travel_guide.png";
import shopMenu from "../../public/assets/img/main/online_shop.png";
import styled from "styled-components";

const MenuContainer = styled.div`
	margin: 39px 0 77px 0;
`;

const MenuWrapper = styled.div`
	background-color: #ffffff;
	display: flex;
	justify-content: space-evenly;
	height: 22.66vw;
`;

const Menu = styled.div`
	width: 22.66vw;
	height: auto;
	border: solid 0.13vw #ccc;
	border-radius: 1.04vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3.65vw 0 0 0;
	cursor: pointer;
	background-color: #ffffff;
`;

const MenuLogo = styled.img`
	display: block;
	width: auto;
	height: 11.72vw;
	object-fit: contain;
`;

const MenuTitle = styled.div`
	padding: 1.3vw 0 0 0%;
	font-size: 2.86vw;
	font-family: "Pretendard";
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #4b6d7b;
`;

export default function FastMenu() {
	return (
		<MenuContainer>
			<MenuWrapper>
				<Menu>
					<Link to='/usage-info'>
						<MenuLogo alt='' src={infoMenu} />
					</Link>
					<MenuTitle>이용안내</MenuTitle>
				</Menu>
				<Menu>
					<Link to='/directions'>
						<MenuLogo alt='' src={trafficMenu} />
					</Link>
					<MenuTitle>오시는길</MenuTitle>
				</Menu>
				<Menu>
					<Link to='/guide-map'>
						<MenuLogo alt='' src={guideMenu} />
					</Link>
					<MenuTitle>가이드맵</MenuTitle>
				</Menu>
				<Menu>
					<a href='https://ottersshop.com/'>
						<MenuLogo alt='' src={shopMenu} />
					</a>
					<MenuTitle>이수달샵</MenuTitle>
				</Menu>
			</MenuWrapper>
		</MenuContainer>
	);
}
