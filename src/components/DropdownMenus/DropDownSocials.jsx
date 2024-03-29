import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItemsSocials } from "../MenuItems/MenuItemsSocials";
import "./Dropdown.css";

const DropdownSocials = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="dropdown">
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        style={{ paddingLeft: "115px", width: "230px" }}
      >
        {MenuItemsSocials.map((item, index) => {
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

export default DropdownSocials;
