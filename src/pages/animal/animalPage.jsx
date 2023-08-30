import React from 'react'

import styled from 'styled-components'

const ContentContainer = styled.div`
  padding-top: 60px;
  background: #f3deba;
  min-height: 800px;
`

const ContentWrapper = styled.div``

export default function Animal() {
  return (
    <ContentContainer>
      <ContentWrapper>
        <h1>오동물친구들 페이지입니다.</h1>
      </ContentWrapper>
    </ContentContainer>
  )
}
