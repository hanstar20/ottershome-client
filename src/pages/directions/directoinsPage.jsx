import React from 'react'

import KakaoMap from '../../components/public/kakaoMap'
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
  align-items: center;
`

const ContentTitle = styled.div`
  margin: 20px 0 30px 0;
  font-size: 6vw;
  font-weight: bold;
  position: relative;

  &::before {
    height: 1px;
    background: #000000;
    position: absolute;
    top: 50%;
    left: -13vw;
    width: 10vw;
    content: '';
  }

  &::after {
    height: 1px;
    background: #000000;
    position: absolute;
    top: 50%;
    right: -13vw;
    width: 10vw;
    content: '';
  }
`


export default function Directions() {
  return (
    <ContentContainer>
      <ContentWrapper>
        <ContentTitle>오시는 길</ContentTitle>
        <KakaoMap />
        <h1>오시는 길</h1>
        <h1>페이지 준비중입니다.</h1>
      </ContentWrapper>
    </ContentContainer>
  )
}
