import React, { useState } from "react";
import NavButton from "../NavButton";

export default function Menu({ menuName, menuItems }) {
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {menuName}
      <ul className="navbar-nav mr-auto">
        {menuItems.map((item) => (
          <li className="nav-item">
            <a
              className={'nav-link' + (activeItem === item ? " active" : "")}
              onClick={function () {
                setActiveItem(item);
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <NavButton name="HOME" link="/" />
  </div>
  );
}
