import styled from "styled-components";
import Button from "./Button";
import React from "react";
import {Link, animateScroll} from 'react-scroll'
import {FaBars} from "react-icons/fa";


const StyledNavItem = styled(Link)`
  color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-decoration: none;
  padding: 0px 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid rgb(1, 191, 113)
  }
`

const NavLinks = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
`
const NavLogo = styled(StyledNavItem)`
  justify-self: flex-start;
`

const NavContent = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0px 24px;
  max-width: 1100px;
`
const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const OpenSidebarButtonWrapper = styled.div`
   display: none;
   justify-content: center;
   align-items: center;
   cursor: pointer;
  
`

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.9);
  height: 80px;
  margin-top: -80px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  
  @media screen and (max-width: 768px) {
    ${NavLinks},${NavButtonWrapper} {
      display: none;
    }
    ${OpenSidebarButtonWrapper} {
      display: flex;
    }
  }
`

const Navbar = ({toggle}) => {
    const props = {
        activeClass: "active",
        to: "",
        spy: true,
        smooth: true,
        duration: 100
    }
    const handleLogoClick = () => animateScroll.scrollToTop(props)
    return (
        <Nav>
            <NavContent>
                <NavLogo {...props} onClick={handleLogoClick}>Money Bank</NavLogo>
                <OpenSidebarButtonWrapper onClick={toggle}>
                    <FaBars style={{color:"white"}}/>
                </OpenSidebarButtonWrapper>
                <NavLinks>
                    <StyledNavItem {...props} to="about">About</StyledNavItem>
                    <StyledNavItem {...props} to="discover">Discover</StyledNavItem>
                    <StyledNavItem {...props} to="services">Services</StyledNavItem>
                </NavLinks>

                <NavButtonWrapper>
                    <Button>Sign In</Button>
                </NavButtonWrapper>
            </NavContent>
        </Nav>
    )
}
export default Navbar