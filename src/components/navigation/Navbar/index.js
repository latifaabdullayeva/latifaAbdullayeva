import React, { useState } from "react";
import logoTransparent from "../../../images/logo_transparent.png";
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
import ContactsInfo from "../ContactsInfo";

const Navbar = ({ toggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavLinks to="home">
              <img src={logoTransparent} className="App-logo" alt="logo" />
              <Typography variant="h6" noWrap>
                Abdullayeva
              </Typography>
            </NavLinks>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="resume">Resume</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="blog">Blog</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={handleClick}>Contacts</NavBtnLink>
          </NavBtn>
          <ContactsInfo
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            setAnchorEl={setAnchorEl}
          />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
