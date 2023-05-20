import React from "react";
import "./navbar.css";
import { menuItems } from "../menuitems.js";
import MenuItems from "./MenuItems";

function Navbar() {
  return (
    <div>
      <section>
        <nav className="navbar">
          <ul className={"nav-side-menu"}>
            {menuItems.map((menu, index) => {
              return (
                <MenuItems className="nav-items" items={menu} key={index} />
              );
            })}
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
