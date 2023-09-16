import React from 'react'

import styled from 'styled-components'

import saveTheOtters from '../../public/assets/img/introduce/SavetheOtters_logo.png'

const ContentContainer = styled.div`
  padding: 0 3.02vw 4.5317vw 3.02vw;
  background: #ffffff;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.02vw 0 4.5317vw 0;
  font-size: 6vw;
  font-weight: bold;
  position: relative;

  &::before {
    height: 0.35vw;
    background: #000000;
    position: absolute;
    top: 50%;
    left: 14vw;
    width: 10vw;
    content: '';
  }

  &::after {
    height: 0.35vw;
    background: #000000;
    position: absolute;
    top: 50%;
    right: 14vw;
    width: 10vw;
    content: '';
  }
`

const ContentBody = styled.div`
  margin-top: 24px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  

  & > div:nth-child(1){
    color: #4b6d7b;
    font-family: "Pretendard";
    font-size: 3.63vw;
    font-weight: bold;
    margin-bottom: 0.76vw;
  }

  & > div:nth-child(2){
    color: #4b6d7b;
    font-family: var(--font-gasoekOne);
    font-size: 9.06vw;
    font-weight: 100;
    height:9.06vw;
    margin-bottom: 4.53vw;
  }

  & > div:nth-child(3){
    display: flex;
    flex-direction:column;
    justify-content: center;
    color: #818181;
    font-family: "Pretendard";
    font-size: 2.72vw;
    font-weight: 500;
    margin-bottom: 4.23vw;
  }

  & > div:nth-child(3) > span {
    margin-bottom: 0.76vw;
  }

  & > div:nth-child(4){
    margin-bottom: 10.57vw;
  }

`

const IntroduceLogo = styled.img`
  height: 75.53vw;
`

export default function Introduction() {
  return (
    <ContentContainer>
      <ContentWrapper>
      <ContentTitle>이웃집수달 소개</ContentTitle>
      <ContentBody>
        <div>
          "동물들과 교감하는 공간"
        </div>
        <div>
          이웃집수달
        </div>
        <div>
        <span>수달가족 그리고 동물가족들과 함께 교감한는 특별한 추억!</span>
        <span>국내유일! 수달과 직접교감하는 동물원에서 
        유튜브스타 돌체라떼, 모카토피도 만나고 </span>
        <span>멸종위기종 수달에 대해 함께 배워요</span>
        
        </div>
        <div>
          <IntroduceLogo alt='save-the-otters' src={saveTheOtters} />
        </div>
      </ContentBody>
      
        
      </ContentWrapper>
    </ContentContainer>
  )
}
