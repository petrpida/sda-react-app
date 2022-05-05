import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavButton from "../NavButton";

export default function Menu({ menuName, menuItems }) {
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {menuName}
      <ul className="navbar-nav me-auto ms-5">
        {menuItems.map((item) => (
          <li className="nav-item">
            <Link
              to=""
              className={'nav-link' + (activeItem === item ? " active" : "")}
              onClick={function () {
                setActiveItem(item);
              }}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <NavButton name="HOME" link="/" />
  </div>
  );
}
