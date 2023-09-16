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

export default function FeeTable() {
	return (
		<Container>
			<Table>
				<colgroup>
					<col style={{ width: "25%" }} />
					<col style={{ width: "35%" }} />
					<col style={{ width: "40%" }} />
				</colgroup>
				<Thead>
					<Tr>
						<Th colSpan={2}>구분</Th>
						<Th>금액</Th>
					</Tr>
				</Thead>
				<tbody>
					<Tr>
						<Th rowSpan={3}>일반</Th>
						<Th>대인</Th>
						<Td>15,000원</Td>
					</Tr>
					<Tr>
						<Th>소인(미성년자)</Th>
						<Td>13,000원</Td>
					</Tr>
					<Tr>
						<Th>24개월 미만</Th>
						<Td>무료</Td>
					</Tr>
					<Tr>
						<Th rowSpan={3}>단체</Th>
						<Th>20인 이상</Th>
						<Td>9,000원</Td>
					</Tr>
					<Tr>
						<Th>20인 미만</Th>
						<Td>10,000원</Td>
					</Tr>
				</tbody>
			</Table>
		</Container>
	);
}
