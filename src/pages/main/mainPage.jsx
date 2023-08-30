import React from 'react'

import styled from 'styled-components'

import ImageSlide from '../../components/main/imageSlide'
import FastMenu from '../../components/main/fastMenu'
import VideoSlide from '../../components/main/videoSlide'

const ContentContainer = styled.div`
  padding-top: 60px;
  background: #f6f6f6;
`

const ContentWrapper = styled.div``

export default function MainContent() {
  return (
    <ContentContainer>
      <ContentWrapper>
        <ImageSlide />
      </ContentWrapper>
      <ContentWrapper>
        <FastMenu />
      </ContentWrapper>
      <ContentWrapper>
        <VideoSlide />
      </ContentWrapper>
    </ContentContainer>
  )
}
