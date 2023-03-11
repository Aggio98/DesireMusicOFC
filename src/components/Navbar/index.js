import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./navbarElements";

const Navbar = () => {
  return (
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink to="/playlists" activeStyle>
          Playlists
        </NavLink>
        <NavLink to="/contact" activeStyle>
          Contact
        </NavLink>
        <NavLink to="/events" activeStyle>
          Events
        </NavLink>
        <NavLink to="/footage" activeStyle>
          Footage
        </NavLink>
        <NavLink to="/social" activeStyle>
          Social
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
