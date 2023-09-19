import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import FeeTable from "../../components/usageInfo/feeTable";
import TimeTable from "../../components/usageInfo/timeTable";

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
		display: flex;
		align-items: center;
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
`;

export default function usageInformation() {
	return (
		<ContentContainer>
			<ContentWrapper>
				<ContentTitle>이용 요금 & 이용 시간</ContentTitle>
				<ContentBody>
					<ContentSubNumber>01</ContentSubNumber>
					<ContentSubtitle>이용 요금</ContentSubtitle>
					<FeeTable />
					<Text>
						<AddExplain>소인은 24개월 이상 ~ 만 18세까지를 기준으로 합니다.</AddExplain>
						<AddExplain>
							단체 요금의 정확한 내용은 <Link to='/group-program-info'>단체 프로그램</Link> 내용을 참고
							바랍니다.
						</AddExplain>
					</Text>
				</ContentBody>
				<ContentBody>
					<ContentSubNumber>02</ContentSubNumber>
					<ContentSubtitle>이용 시간</ContentSubtitle>
					<TimeTable />
					<Text>
						<AddExplain>매주 목요일은 정기휴무 입니다.</AddExplain>
						<AddExplain>운영시간 1시간 전 입장 마감 (평일 5시/주말 6시)</AddExplain>
						<AddExplain>
							공휴일 운영시간은 <Link to='/notice'>공지사항</Link> 또는{" "}
							<a href='https://naver.me/FxLX00Ao'>네이버 지도</a>를 참고 바랍니다.
						</AddExplain>
					</Text>
				</ContentBody>
			</ContentWrapper>
		</ContentContainer>
	);
}
