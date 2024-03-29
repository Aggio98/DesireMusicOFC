import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItemsEvents } from "../MenuItems/MenuItemsEvents";
import "./Dropdown.css";

const DropdownEvents = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="dropdown">
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        style={{ paddingLeft: "125px", width: "230px" }}
      >
        {MenuItemsEvents.map((item, index) => {
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

export default DropdownEvents;
