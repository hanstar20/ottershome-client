import React from 'react'
import { Link } from 'react-router-dom'
import payMenu from '../../public/assets/img/main/fee.png'
import timeMenu from '../../public/assets/img/main/time.png'
import trafficMenu from '../../public/assets/img/main/directions.png'
import mapMenu from '../../public/assets/img/main/map.png'
import styled from 'styled-components'

const MenuContainer = styled.div`
  overflow: hidden;
  position: relative;
  top: -25px;
  z-index: 5;
`

const MenuWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  border-radius: 30px 0 30px 0;
  box-sizing: border-box;
  margin-right: 15px;
  margin-left: 15px;
  padding: 3vw 2vw;
`

const Menu = styled.div`
  width: 25%;
  padding: 0 2vw;
`

const MenuLogo = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

export default function FastMenu() {
  return (
    <MenuContainer>
      <MenuWrapper>
        <Menu>
          <Link to="/usage-info">
            <MenuLogo alt="" src={payMenu} />
          </Link>
        </Menu>
        <Menu>
          <Link to="/usage-info">
            <MenuLogo alt="" src={timeMenu} />
          </Link>
        </Menu>
        <Menu>
          <Link to="/directions">
            <MenuLogo alt="" src={trafficMenu} />
          </Link>
        </Menu>
        <Menu>
          <Link to="/guide-map">
            <MenuLogo alt="" src={mapMenu} />
          </Link>
        </Menu>
      </MenuWrapper>
    </MenuContainer>
  )
}
