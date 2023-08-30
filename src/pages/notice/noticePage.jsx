import React from 'react'

import styled from 'styled-components'

const ContentContainer = styled.div`
  padding-top: 60px;
  background: #f3deba;
  min-height: 800px;
`

const ContentWrapper = styled.div``

export default function Notice() {
  return (
    <ContentContainer>
      <ContentWrapper>
        <h1>공지사항 페이지입니다.</h1>
      </ContentWrapper>
    </ContentContainer>
  )
}
