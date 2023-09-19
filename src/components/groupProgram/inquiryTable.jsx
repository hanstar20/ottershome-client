import React from "react";

import styled from "styled-components";

const Container = styled.div`
	padding: 0 7.55vw;
`;

const Table = styled.table`
	width: 100%;
	border-top: 0.3vw solid #000;
`;

const Thead = styled.thead``;

const Tr = styled.tr`
	height: 7.55vw;
`;

const Th = styled.th`
	border-bottom: 0.13vw solid #ababab;
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 2.86vw;
	padding: 2.27vw 0;
	text-align: left;
`;

const ContentWrapper = styled.div`
	& > span {
		padding: 0 1.3vw;
		font-family: "Pretendard";
		font-weight: 600;
		font-size: 3.39vw;
	}

	& > ul {
		margin: 0;
		padding: 1.04vw 0 0 5.21vw;
	}

	& li {
		margin: 1.82vw 0;
	}

	a {
		color: #000000;
		text-decoration: none;
	}
`;

export default function InquiryTable() {
	return (
		<Container>
			<Table>
				<colgroup>
					<col style={{ width: "100%" }} />
				</colgroup>
				<Thead>
					<Tr>
						<Th>
							<ContentWrapper>
								<span>사전답사 및 예약 문의</span>
								<ul>
									<li>
										전화: <a href='tel:053-252-1610'>053-252-1610</a>
									</li>
									<li>
										문자: <a href='sms:010-6620-5675'>010-6620-5675</a>
									</li>
								</ul>
							</ContentWrapper>
						</Th>
					</Tr>
				</Thead>
			</Table>
		</Container>
	);
}
