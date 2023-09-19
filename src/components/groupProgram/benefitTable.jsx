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
	font-size: 3.32vw;
	padding: 2.27vw 0;
`;

const Td = styled.td`
	border-bottom: 0.13vw solid #ababab;
	text-align: center;
	font-family: "Pretendard";
	font-size: 3.02vw;
	padding: 2.27vw 0;
	font-weight: bold;
`;

export default function BenefitTable() {
	return (
		<Container>
			<Table>
				<colgroup>
					<col style={{ width: "15%" }} />
					<col style={{ width: "25%" }} />
					<col style={{ width: "60%" }} />
				</colgroup>
				<Thead>
					<Tr>
						<Th colSpan={2}>구분</Th>
						<Th>혜택</Th>
					</Tr>
				</Thead>
				<tbody>
					<Tr>
						<Th rowSpan={2}>요금</Th>
						<Th>20인 이상</Th>
						<Td>9,000원</Td>
					</Tr>
					<Tr>
						<Th>20인 미만</Th>
						<Td>10,000원</Td>
					</Tr>
					<Tr>
						<Th colSpan={2}>기념품</Th>
						<Td>뱃지 1인 1뱃지 제공</Td>
					</Tr>
					<Tr>
						<Th colSpan={2}>동물간식</Th>
						<Td>체험 인원 별 동물간식 제공</Td>
					</Tr>
				</tbody>
			</Table>
		</Container>
	);
}
