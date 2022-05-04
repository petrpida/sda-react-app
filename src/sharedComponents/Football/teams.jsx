import React from "react";
import NavButton from "../NavButton";
import { teams } from "./data";
import NavBar from "./navBar";
import './styles.css'

export default function Teams() {

  const teamsSorted = [...teams]
  
  teamsSorted.sort((a, b) => {
    return a.team.localeCompare(b.team) 
  })

  return (
    <div>
        <NavBar active="teams"/>
      <main>
        <div className="container">
          <ul>
            {teamsSorted.map((item, index) => {
              return <li key={index}>{item.team}</li>
            })}
          </ul>
        </div>
      </main>
      <NavButton name="HOME" link="/"/>
    </div>
  );
}
