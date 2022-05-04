import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({active}) {
  const links = ["teams", "games", "ranking"]

  return (
    <div>
    <nav>
      <div className="football">
        <img
          src="https://img.freepik.com/free-vector/football-player-action-logo_293731-76.jpg"
          alt="footbal"
          width={100}
          height={100}
        />
        <div>Football League</div>
      </div>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            <Link
              className={active === item ? " active-link" : ""}
              to={"../" + item}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    </div>
  );
}
