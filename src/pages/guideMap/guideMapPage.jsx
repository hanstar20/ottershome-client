import React from 'react'

import styled from 'styled-components'

const ContentContainer = styled.div`
  background: #ffffff;
  min-height: 800px;
`

const ContentWrapper = styled.div`
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function GuideMap() {
  return (
    <ContentContainer>
      <ContentWrapper>
        <h1>가이드맵</h1>
        <h1>페이지 준비중입니다.</h1>
      </ContentWrapper>
    </ContentContainer>
  )
}
