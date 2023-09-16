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
	border-bottom: 1px solid #ababab;
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 3.32vw;
	padding: 2.27vw 0;
`;

const Td = styled.td`
	border-bottom: 1px solid #ababab;
	text-align: center;
	font-family: "Pretendard";
	font-size: 3.02vw;
	padding: 2.27vw 0;
	font-weight: bold;
`;

export default function TimeTable() {
	return (
		<Container>
			<Table>
				<colgroup>
					<col style={{ width: "50%" }} />
					<col style={{ width: "50%" }} />
				</colgroup>
				<Thead>
					<Tr>
						<Th>구분</Th>
						<Th>운영시간</Th>
					</Tr>
				</Thead>
				<tbody>
					<Tr>
						<Th>평일(목요일 제외)</Th>
						<Td>13:00 ~ 18:00</Td>
					</Tr>
					<Tr>
						<Th>주말, 공휴일</Th>
						<Td>12:30 ~ 19:00</Td>
					</Tr>
				</tbody>
			</Table>
		</Container>
	);
}
