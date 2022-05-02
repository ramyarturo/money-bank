import {SidebarCloseIcon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper} from "./components";
import Button from "../Button";


const Sidebar =({isOpen, toggle}) => {

  return <SidebarContainer isOpen={isOpen}>

      <SidebarWrapper>
         <SidebarMenu>
             <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
             <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
             <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
         </SidebarMenu>

          <Button>Sign In</Button>
      </SidebarWrapper>
      <SidebarCloseIcon onClick={toggle}/>
  </SidebarContainer>
}

export default Sidebar