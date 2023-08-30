import React from 'react'

import styled from 'styled-components'

const ContentContainer = styled.div`
  padding-top: 60px;
  background: #f3deba;
  min-height: 800px;
`

const ContentWrapper = styled.div``

export default function ParkingInformation() {
  return (
    <ContentContainer>
      <ContentWrapper>
        <h1>주차 안내 페이지입니다.</h1>
      </ContentWrapper>
    </ContentContainer>
  )
}
