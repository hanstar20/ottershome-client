import React from 'react'

import styled from 'styled-components'

const ContentContainer = styled.div`
  margin-top: 60px;
  background: #ffffff;
  min-height: 800px;
`

const ContentWrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function ParkingInformation() {
  return (
    <ContentContainer>
      <ContentWrapper>
        <h1>주차 안내 페이지입니다.</h1>
      </ContentWrapper>
    </ContentContainer>
  )
}
