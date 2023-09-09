import React from 'react'
import { useDispatch } from 'react-redux'
import { menuToggle } from '../../redux/slice/menuToggle'
import { Link } from 'react-router-dom'

import HamburgerMenuImg from '../../public/assets/img/layout/hamburger_menu.png'

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
        <HamburgerMenu onClick={handleToggleClick} src={HamburgerMenuImg} />
      </HeaderWrapper>
      <HeaderWrapper>
        <HeaderLogo to="/">
          이웃집수달
        </HeaderLogo>
      </HeaderWrapper>
      <HeaderWrapper />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  position: sticky;
  top: 0;
  width: auto;
  z-index: 8000;
`

const HeaderWrapper = styled.div`
  height: 49px;
  margin: 0 25px;
  display: flex;
  align-items: center;

  &:nth-child(3) {
    width:22px;
  }
`

const HeaderLogo = styled(Link)`
  width: 90px;
  font-family: var(--font-gasoekOne);
  font-size: 20px;
  text-decoration: none;
  color: #635f54;
  cursor: pointer;
`

const HamburgerMenu = styled.img`
  height: 29px;
  width: 29px;
  cursor: pointer;
`

