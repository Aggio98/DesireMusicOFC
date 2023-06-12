import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import DropdownSocials from "./DropdownMenus/DropDownSocials";
import DropdownEvents from "./DropdownMenus/DownDownEvents";
import DropdownPlaylists from "./DropdownMenus/DropDownPlaylist";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdownPlaylists, setDropdownPlaylists] = useState(false);
  const [dropdownEvents, setDropdownEvents] = useState(false);
  const [dropdownSocials, setDropdownSocials] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnterPlaylists = () => {
    if (window.innerWidth < 770) {
      setDropdownPlaylists(false);
    } else {
      setDropdownPlaylists(true);
    }
  };

  const onMouseLeavePlaylists = () => {
    if (window.innerWidth < 770) {
      setDropdownPlaylists(false);
    } else {
      setDropdownPlaylists(false);
    }
  };
  const onMouseEnterEvents = () => {
    if (window.innerWidth < 770) {
      setDropdownEvents(false);
    } else {
      setDropdownEvents(true);
    }
  };

  const onMouseLeaveEvents = () => {
    if (window.innerWidth < 770) {
      setDropdownEvents(false);
    } else {
      setDropdownEvents(false);
    }
  };
  const onMouseEnterSocials = () => {
    if (window.innerWidth < 770) {
      setDropdownSocials(false);
    } else {
      setDropdownSocials(true);
    }
  };

  const onMouseLeaveSocials = () => {
    if (window.innerWidth < 770) {
      setDropdownSocials(false);
    } else {
      setDropdownSocials(false);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnterPlaylists}
            onMouseLeave={onMouseLeavePlaylists}
          >
            <Link
              to="/playlists"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Playlists
            </Link>
            {dropdownPlaylists && <DropdownPlaylists />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnterEvents}
            onMouseLeave={onMouseLeaveEvents}
          >
            <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
              Events
            </Link>
            {dropdownEvents && <DropdownEvents />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnterSocials}
            onMouseLeave={onMouseLeaveSocials}
          >
            <Link to="/social" className="nav-links" onClick={closeMobileMenu}>
              Socials
            </Link>
            {dropdownSocials && <DropdownSocials />}
          </li>
          <li className="nav-item">
            <Link to="/footage" className="nav-links" onClick={closeMobileMenu}>
              Footage
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
