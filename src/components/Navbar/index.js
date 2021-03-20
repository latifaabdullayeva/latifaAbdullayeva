import React from "react";
import logoTransparent from "../../images/logo_transparent.png";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Typography from "@material-ui/core/Typography";

function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img src={logoTransparent} className="App-logo" alt="logo" />
          <Typography variant="h6" noWrap>
            Abdullayeva
          </Typography>
        </NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="projects">Projects</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="blog">Blog</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contacts">Contacts</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
