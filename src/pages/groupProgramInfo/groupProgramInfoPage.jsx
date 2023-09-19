import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import InquiryTable from "../../components/groupProgram/inquiryTable";
import BenefitTable from "../../components/groupProgram/benefitTable";
import UsageTable from "../../components/groupProgram/usageTable";

const ContentContainer = styled.div`
	background: #ffffff;
`;

const ContentWrapper = styled.div`
	height: auto;
	display: flex;
	flex-direction: column;
	margin-bottom: 6.04vw;
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

const ContentSubNumber = styled.div`
	margin: 0 7.55vw 2.34vw 7.55vw;
	font-size: 2.86vw;
	color: #00939b;
	margin-bottom: 0.39vw;
	font-weight: 700;
	font-family: "Pretendard";
`;

const ContentSubtitle = styled.div`
	margin: 0 7.55vw 2.34vw 7.55vw;
	font-family: "Pretendard";
	font-weight: bold;
	font-size: 4.69vw;
`;

const ContentBody = styled.div`
	margin: 0 4.53vw 3.02vw 4.53vw;
	display: flex;
	flex-direction: column;
`;

const Text = styled.div`
	padding: 3.02vw 7.55vw;
	display: flex;
	flex-direction: column;
`;

const AddExplain = styled.div`
	padding: 0.45vw 0;
	font-size: 2.72vw;

	&::before {
		content: "※";
		color: #000;
		margin-right: 1.51vw;
	}

	& > span {
		color: #fe5977;
	}
`;

export default function GroupProgramInfo() {
	return (
		<ContentContainer>
			<ContentWrapper>
				<ContentTitle>단체 프로그램</ContentTitle>
				<ContentBody>
					<ContentSubNumber>01</ContentSubNumber>
					<ContentSubtitle>예약 문의</ContentSubtitle>
					<InquiryTable />
					<Text>
						<AddExplain>
							단체 예약 현황은 카페의 <a href='https://cafe.naver.com/nbotter/432'>단체 현황</a>에서
							확인할 수 있습니다.
						</AddExplain>
					</Text>
				</ContentBody>
				<ContentBody>
					<ContentSubNumber>02</ContentSubNumber>
					<ContentSubtitle>단체 프로그램 혜택</ContentSubtitle>
					<BenefitTable />
					<Text>
						<AddExplain>
							<span>15명 이상</span> 예약 시 단체할인가 적용됩니다.
						</AddExplain>
					</Text>
				</ContentBody>
				<ContentBody>
					<ContentSubNumber>03</ContentSubNumber>
					<ContentSubtitle>단체 관람 이용 안내</ContentSubtitle>
					<UsageTable />
					<Text>
						<AddExplain>
							단체 프로그램 예약은 <span>평일</span>만 가능합니다.
						</AddExplain>
						<AddExplain>체험 시간 및 인솔 교사 인원은 전화로 협의할 수 있습니다.</AddExplain>
						<AddExplain>도시락이나 간식 등 식사를 할 경우 사전 협의 꼭 부탁드립니다.</AddExplain>
						<AddExplain>
							<Link to='/guide-map'>뒷마당 야외</Link> (피크닉 테이블 또는 돗자리) 사용 가능합니다.
						</AddExplain>
						<AddExplain>무료 주차 및 대형 버스 주차할 수 있습니다.</AddExplain>
					</Text>
				</ContentBody>
				<ContentBody>
					<ContentSubNumber>04</ContentSubNumber>
					<ContentSubtitle>유의 사항</ContentSubtitle>
					<Text>
						<AddExplain>
							교육기관, 종교단체, 학원, 기관단체에만 예약제로 진행되며, 개인 단체는 해당하지 않습니다.
						</AddExplain>
						<AddExplain>사전 예약 시 할인이 가능합니다.</AddExplain>
						<AddExplain>단체는 24개월 미만 할인 혜택이 적용되지 않습니다.</AddExplain>
						<AddExplain>
							동물원 상황에 따라 예약이 불가능한 날짜가 발생할 수 있습니다.
							<br /> 직원이 추가로 출근해야 하므로 출근할 수 있는 직원이 없으면 단체 예약이 어려울 수
							있습니다.
						</AddExplain>
						<AddExplain>원활한 진행을 위해 일정을 여유 있게 예약해 주시기 바랍니다.</AddExplain>
						<AddExplain>
							( ※ <span>당일, 하루 전 예약 불가</span> / 단체할인은 <span>평일</span>만 가능 )
						</AddExplain>
					</Text>
				</ContentBody>
			</ContentWrapper>
		</ContentContainer>
	);
}
