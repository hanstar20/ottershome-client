import React from 'react'

import styled from 'styled-components'

const ContentContainer = styled.div`
  margin-top: 60px;
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

export default function Introduction() {
  return (
    <ContentContainer>
      <ContentWrapper>
        <h1>이웃집수달 소개</h1>
        <h1>페이지 준비중입니다.</h1>
      </ContentWrapper>
    </ContentContainer>
  )
}
