import React from 'react'

import styled from 'styled-components'

const ContentContainer = styled.div`
  padding-top: 60px;
  background: #f3deba;
  min-height: 800px;
`

const ContentWrapper = styled.div``

export default function Introduction() {
  return (
    <ContentContainer>
      <ContentWrapper>
        <h1>이웃집수달 소개 페이지입니다.</h1>
      </ContentWrapper>
    </ContentContainer>
  )
}
