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

	& > span {
		color: #00939b;
	}
`;

const Td = styled.td`
	border-bottom: 0.13vw solid #ababab;
	text-align: center;
	font-family: "Pretendard";
	font-size: 3.02vw;
	padding: 2.27vw 0;
	font-weight: bold;
`;

export default function UsageTable() {
	return (
		<Container>
			<Table>
				<colgroup>
					<col style={{ width: "40%" }} />
					<col style={{ width: "60%" }} />
				</colgroup>
				<Thead>
					<Tr>
						<Th>시간</Th>
						<Th>관람 방법</Th>
					</Tr>
				</Thead>
				<tbody>
					<Tr>
						<Th>
							오전 타임 <br />
							<span>(10시~12시)</span>
						</Th>
						<Td>대관 관람 가능</Td>
					</Tr>
					<Tr>
						<Th>
							오후 타임 <br />
							<span>(13시~18시)</span>
						</Th>
						<Td>방문 손님들과 자유롭게 관람 가능</Td>
					</Tr>
				</tbody>
			</Table>
		</Container>
	);
}
