import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import SideMenu from './components/layout/sideMenu'
import MainContent from './pages/main/mainPage'
import Introduction from './pages/introduction/introductionPage'
import FeeInformation from './pages/feeInfomation/feeInformationPage'
import TimeInformation from './pages/timeInfomation/timeInformationPage'
import Video from './pages/video/videoPage'
import ParkingInformation from './pages/parkingInformation/parkingInformationPage'
import Notice from './pages/notice/noticePage'
import FAQ from './pages/faq/faqPage'
import Directions from './pages/directions/directoinsPage'
import Animal from './pages/animal/animalPage'
import GuideMap from './pages/guideMap/guideMapPage'

// styled components
import styled from 'styled-components'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <ContentWrapper>
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} exact={true} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/feeInformation" element={<FeeInformation />} />
            <Route path="/timeInformation" element={<TimeInformation />} />
            <Route path="/video" element={<Video />} />
            <Route
              path="/parkingInformation"
              element={<ParkingInformation />}
            />
            <Route path="/notice" element={<Notice />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/directions" element={<Directions />} />
            <Route path="/animal" element={<Animal />} />
            <Route path="/guideMap" element={<GuideMap />} />
          </Routes>
          <Footer />
        </ContentWrapper>
        <SideMenuWrapper>
          <SideMenu />
        </SideMenuWrapper>
      </Container>
    </BrowserRouter>
  )
}

const Container = styled.div``

const SideMenuWrapper = styled.div``

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 500px; */
`

export default App