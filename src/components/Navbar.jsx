import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <section>
        <nav className="navbar">
          <ul className={click ? "nav-side-menu start" : "nav-side-menu"}>
            <li className="nav-items">
              <Link
                to="/events"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {" "}
                Events{" "}
              </Link>
            </li>

            <li className="nav-items">
              <Link
                to="/footage"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {" "}
                Footage
              </Link>
            </li>

            <li className="nav-items">
              <Link className="nav-links" onClick={closeMobileMenu}>
                {" "}
                Playlists
              </Link>
            </li>

            <li className="nav-items">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {" "}
                Contact{" "}
              </Link>
            </li>

            <li className="nav-items">
              <Link
                to="/social"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {" "}
                Social{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
