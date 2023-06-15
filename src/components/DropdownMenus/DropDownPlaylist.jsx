import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItemsPlaylists } from "../MenuItems/MenuItemPlaylists";
import "./Dropdown.css";

const DropdownPlaylists = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="dropdown">
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        style={{ paddingLeft: "95px", width: "230px" }}
      >
        {MenuItemsPlaylists.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              />
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownPlaylists;
