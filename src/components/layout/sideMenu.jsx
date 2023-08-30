import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { menuToggle } from '../../redux/slice/menuToggle'
import { Link } from 'react-router-dom'
import headerLogo from '../../public/assets/img/Otters_home_logo_white.png'
import latte from '../../public/assets/img/라떼.png'
import dolce from '../../public/assets/img/돌체.png'
import mocha from '../../public/assets/img/모카.png'
import toffee from '../../public/assets/img/토피.png'
// react-collapse
import { Collapse } from 'react-collapse'
// styled components
import styled, { css } from 'styled-components'

export default function SideMenu() {
  const isOpen = useSelector(state => state.toggle.value)

  const [collapseToggle, setCollapseToggle] = useState([
    false,
    false,
    false,
    false,
  ])

  const dispatch = useDispatch()

  const handleToggleClick = () => {
    dispatch(menuToggle())
  }

  return (
    <>
      <MenuContainer isOpen={isOpen}>
        <MenuHeader>
          <HeaderWrapper>
            <HeaderButtonWrapper>
              <Link to="/" onClick={handleToggleClick}>
                <HeaderLogo alt="Otters Home" src={headerLogo} />
              </Link>
              <div>
                <CloseButton onClick={handleToggleClick} />
              </div>
            </HeaderButtonWrapper>
            <HeaderContentWrapper>
              <MenuTitle>이웃집수달</MenuTitle>
              <MenuDescription>동물들과 교감하는 공간</MenuDescription>
            </HeaderContentWrapper>
          </HeaderWrapper>
        </MenuHeader>
        <MenuWrapper>
          <MenuList>
            <div>
              <MenuItem
                onClick={() => {
                  setCollapseToggle(prev => [
                    !collapseToggle[0],
                    false,
                    false,
                    false,
                  ])
                }}
              >
                <MenuItemWrapper>
                  <ParentItemWrapper>
                    <MenuLogo alt="latte" src={latte} />
                    <ParentMenu>이웃집수달</ParentMenu>
                  </ParentItemWrapper>
                  <MenuArrowWrapper>
                    <MenuArrow isOpen={collapseToggle[0]} />
                  </MenuArrowWrapper>
                </MenuItemWrapper>
              </MenuItem>
              <Collapse isOpened={collapseToggle[0]}>
                <CollapseDiv>
                  <div>
                    <StyledLink to="/introduction" onClick={handleToggleClick}>
                      이웃집수달 소개
                    </StyledLink>
                  </div>
                </CollapseDiv>
              </Collapse>
            </div>
            <div>
              <MenuItem
                onClick={() => {
                  setCollapseToggle(prev => [
                    false,
                    !collapseToggle[1],
                    false,
                    false,
                  ])
                }}
              >
                <MenuItemWrapper>
                  <ParentItemWrapper>
                    <MenuLogo alt="dolce" src={dolce} />
                    <ParentMenu>동물원 안내</ParentMenu>
                  </ParentItemWrapper>
                  <MenuArrowWrapper>
                    <MenuArrow isOpen={collapseToggle[1]} />
                  </MenuArrowWrapper>
                </MenuItemWrapper>
              </MenuItem>
              <Collapse isOpened={collapseToggle[1]}>
                <CollapseDiv>
                  <div>
                    <StyledLink
                      to="/usageInformation"
                      onClick={handleToggleClick}
                    >
                      이용요금 및 운영시간
                    </StyledLink>
                  </div>
                  <div>
                    <StyledLink to="/directions" onClick={handleToggleClick}>
                      오시는길
                    </StyledLink>
                  </div>
                  <div>
                    <StyledLink
                      to="/parkingInformation"
                      onClick={handleToggleClick}
                    >
                      주차 안내
                    </StyledLink>
                  </div>
                </CollapseDiv>
              </Collapse>
            </div>
            <div>
              <MenuItem
                onClick={() => {
                  setCollapseToggle(prev => [
                    false,
                    false,
                    !collapseToggle[2],
                    false,
                  ])
                }}
              >
                <MenuItemWrapper>
                  <ParentItemWrapper>
                    <MenuLogo alt="mocha" src={mocha} />
                    <ParentMenu>동물원 친구들</ParentMenu>
                  </ParentItemWrapper>
                  <MenuArrowWrapper>
                    <MenuArrow isOpen={collapseToggle[2]} />
                  </MenuArrowWrapper>
                </MenuItemWrapper>
              </MenuItem>
              <Collapse isOpened={collapseToggle[2]}>
                <CollapseDiv>
                  <div>
                    <StyledLink to="/animal" onClick={handleToggleClick}>
                      수달
                    </StyledLink>
                  </div>
                  <div>
                    <StyledLink to="/animal" onClick={handleToggleClick}>
                      개
                    </StyledLink>
                  </div>
                  <div>
                    <StyledLink to="/animal" onClick={handleToggleClick}>
                      고양이
                    </StyledLink>
                  </div>
                  <div>
                    <StyledLink to="/animal" onClick={handleToggleClick}>
                      토끼
                    </StyledLink>
                  </div>
                  <div>
                    <StyledLink to="/animal" onClick={handleToggleClick}>
                      거북이
                    </StyledLink>
                  </div>
                  <div>
                    <StyledLink to="/animal" onClick={handleToggleClick}>
                      앵무새
                    </StyledLink>
                  </div>
                  <div>
                    <StyledLink to="/animal" onClick={handleToggleClick}>
                      땅콩
                    </StyledLink>
                  </div>
                  <div>
                    <StyledLink to="/animal" onClick={handleToggleClick}>
                      염소
                    </StyledLink>
                  </div>
                </CollapseDiv>
              </Collapse>
            </div>
            <div>
              <MenuItem
                onClick={() => {
                  setCollapseToggle(prev => [
                    false,
                    false,
                    false,
                    !collapseToggle[3],
                  ])
                }}
              >
                <MenuItemWrapper>
                  <ParentItemWrapper>
                    <MenuLogo alt="toffee" src={toffee} />
                    <ParentMenu>커뮤니티</ParentMenu>
                  </ParentItemWrapper>
                  <MenuArrowWrapper>
                    <MenuArrow isOpen={collapseToggle[3]} />
                  </MenuArrowWrapper>
                </MenuItemWrapper>
              </MenuItem>
              <Collapse isOpened={collapseToggle[3]}>
                <CollapseDiv>
                  <div>
                    <StyledLink to="/notice" onClick={handleToggleClick}>
                      공지사항
                    </StyledLink>
                  </div>
                  <div>
                    <StyledLink to="/video" onClick={handleToggleClick}>
                      영상 클립
                    </StyledLink>
                  </div>
                  <div>
                    <StyledLink to="/faq" onClick={handleToggleClick}>
                      자주하는 질문
                    </StyledLink>
                  </div>
                </CollapseDiv>
              </Collapse>
            </div>
          </MenuList>
        </MenuWrapper>
      </MenuContainer>
      <ModalBackground isOpen={isOpen} />
    </>
  )
}

const ModalBackground = styled.div`
  background-color: #000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8500;
  opacity: ${props => (props.isOpen ? '0' : '0.7')};
  display: ${props => (props.isOpen ? 'none' : 'block')};
`

const MenuContainer = styled.div`
  background: #ffffff;
  box-sizing: border-box;
  width: calc(100% - 30px);
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 9000;
  transition: all 0.5s ease;
  transform: ${props => (props.isOpen ? 'translateX(-100%)' : 'translateX(0)')};
  visibility: visible;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

const MenuWrapper = styled.div`
  background-color: #f6f6f6;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`

const MenuList = styled.div`
  margin-top: -40px;
  overflow: hidden;
  border-radius: 30px 0 30px 0;

  div:first-child {
    margin-top: 0;
  }

  div {
    margin-top: 2px;
  }
`

const MenuItem = styled.div`
  display: block;
  background-color: #ffffff;
  height: 30px;
  padding: 15px 20px;
`

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const ParentItemWrapper = styled.div`
  display: flex;
  align-items: center;
`

const MenuHeader = styled.div`
  background-color: #4b6d7b;
  box-sizing: border-box;
  padding-top: 10px;
  height: 220px;
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`

const HeaderLogo = styled.img`
  width: 70px;
  padding: 0 30px;
`

const MenuLogo = styled.img`
  height: 30px;
  padding: 0 5px;
`

const CloseButton = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
  padding-left: 20px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 25px;
    height: 2px;
    background-color: #fff;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`

const HeaderContentWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`

const MenuTitle = styled.span`
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
`

const MenuDescription = styled.span`
  color: #ffffff;
  font-size: 20px;
`

const CollapseDiv = styled.div`
  background-color: #fcfcfc;
  padding-top: 25px;
  padding-bottom: 25px;

  div {
    position: relative;
    overflow: hidden;
  }
`

const StyledLink = styled(Link)`
  display: block;
  box-sizing: border-box;
  color: #292929;
  font-size: 14px;
  padding: 8px 0 8px 60px;
  text-decoration: none;
`

const ParentMenu = styled.span`
  padding-left: 5px;
  font-size: 17px;
  font-weight: bold;
`

const MenuArrowWrapper = styled.div`
  position: relative;
  display: block;
  width: 20px;
  padding: 10px;
  text-decoration: none;
  margin-bottom: 5px;
`

const MenuArrow = styled.span`
  position: absolute;
  top: 11px;
  right: 20px;

  &::before,
  &::after {
    position: relative;
    content: '';
    display: block;
    width: 12px;
    height: 2px;
    background: ${props => (props.isOpen ? '#4b6d7b' : '#bbbbbb')};
    transition: 0.3s ease-in-out;
  }

  &::before {
    transform: ${props => (props.isOpen ? 'rotate(-45deg)' : 'rotate(45deg)')};
  }

  &::after {
    left: 8px;
    top: -2px;
    transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'rotate(-45deg)')};
  }
`
