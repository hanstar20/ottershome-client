import React from 'react'
import { useDispatch } from 'react-redux'
import { menuToggle } from '../../redux/slice/menuToggle'
import { Link } from 'react-router-dom'

import headerLogo from '../../public/assets/img/Otters_home.png'
// styled components
import styled from 'styled-components'

export default function Header() {
  const dispatch = useDispatch()

  const handleToggleClick = () => {
    dispatch(menuToggle())
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HamburgerMenu onClick={handleToggleClick}>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </HamburgerMenu>
      </HeaderWrapper>
      <HeaderWrapper>
        <Link to="/">
          <HeaderLogo alt="Otters Home" src={headerLogo} />
        </Link>
      </HeaderWrapper>
      <HeaderWrapper />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  height: 60px;
  position: fixed;
  width: 100%;
  z-index: 8000;
`

const HeaderWrapper = styled.div`
  margin: 5px 25px;
  display: flex;
  align-items: center;
`

const HeaderLogo = styled.img`
  width: 90px;
`

const HamburgerMenu = styled.div`
  width: 22px;
  cursor: pointer;
`

const HamburgerLine = styled.div`
  height: 2px;
  background-color: black;
  margin: 5px 0;
`
