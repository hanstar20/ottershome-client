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
	height: 100%;
	border: solid 0.13vw #ccc;
	border-radius: 1.04vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	cursor: pointer;
	background-color: #ffffff;
`;

const MenuLink = styled(Link)`
	text-decoration: none;
`;

const MenuA = styled.a`
	text-decoration: none;
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
				<MenuLink to='/usage-info'>
					<Menu>
						<MenuLogo alt='' src={infoMenu} />
						<MenuTitle>이용안내</MenuTitle>
					</Menu>
				</MenuLink>
				<MenuLink to='/directions'>
					<Menu>
						<MenuLogo alt='' src={trafficMenu} />
						<MenuTitle>오시는길</MenuTitle>
					</Menu>
				</MenuLink>
				<MenuLink to='/guide-map'>
					<Menu>
						<MenuLogo alt='' src={guideMenu} />
						<MenuTitle>가이드맵</MenuTitle>
					</Menu>
				</MenuLink>
				<MenuA href='https://ottersshop.com/'>
					<Menu>
						<MenuLogo alt='' src={shopMenu} />
						<MenuTitle>이수달샵</MenuTitle>
					</Menu>
				</MenuA>
			</MenuWrapper>
		</MenuContainer>
	);
}
