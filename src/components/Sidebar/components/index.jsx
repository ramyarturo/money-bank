import styled from "styled-components";
import {MdClose} from "react-icons/md";
import {Link} from "react-scroll";


export const SidebarContainer = styled.aside`
   display: grid;
   place-items: center;
   position: fixed;
   background-color: rgb(13,13,13);
   width: 100%;
   height: 100%;
   z-index: 100;
  
  transition: 0.3s ease-in-out ;
   top: ${({isOpen}) => isOpen ? "0" : "-100%"};
   opacity: ${({isOpen}) => isOpen ? "100%" : "0"};;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4,80px);
  text-align: center;
`
export const SidebarLink = styled(Link)`
  font-size: 1.8rem;
  transition: 0.2s ease-in-out all;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.green};
    transform: scale(0.98);
  }
`

export const SidebarCloseIcon = styled(MdClose)`
  color: #fff;
  font-size: 1.9rem;
  position: absolute;
  width: 50px;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  cursor: pointer;
`