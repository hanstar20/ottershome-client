import React from "react";

import styled from "styled-components";

const Container = styled.div`
	padding: 6vw 0;
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

export default function GuideTable() {
	return (
		<Container>
			<Table>
				<colgroup>
					<col style={{ width: "25%" }} />
					<col style={{ width: "75%" }} />
				</colgroup>
				<Thead>
					<Tr>
						<Th>구분</Th>
						<Th>관람</Th>
					</Tr>
				</Thead>
				<tbody>
					<Tr>
						<Th>1관람</Th>
						<Td>
							고양이(코리안숏헤어) / 강아지(골든리트리버,미니비숑,웰시코기) / 스컹크 / 페럿 /
							도마뱀(블루텅스킨크)
						</Td>
					</Tr>
					<Tr>
						<Th>2관람</Th>
						<Td>
							보어염소 / 면양 / 토끼 / 기니피그 / 프레리독 / 골든햄스터 / 친칠라 / 반수생거북 /
							설가타육지거북 / 왕관앵무 / 밀웜
						</Td>
					</Tr>
					<Tr>
						<Th>3관람</Th>
						<Td>작은발톱수달</Td>
					</Tr>
					<Tr>
						<Th>외부</Th>
						<Td>야자매트 운동장 / 낚시놀이 / 모래놀이 / 원형그네 (요청시 오픈)</Td>
					</Tr>
				</tbody>
			</Table>
		</Container>
	);
}
