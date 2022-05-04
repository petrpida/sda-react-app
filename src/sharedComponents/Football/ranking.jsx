import React from "react";
import NavButton from "../NavButton";
import NavBar from "./navBar";

export default function Ranking() {
  return (
    <div>
      <nav>
        <div>Naše liga</div>
        <NavBar/>
      </nav>
      <main>
        <div class="container">
        <table>
            <thead>
              <tr>
              <th>ranking</th>
              <th>team</th>
              <th>games</th>
              <th>wins</th>
              <th>ties</th>
              <th>losses</th>
              <th>score</th>
              <th>points</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </main>
      <NavButton name="HOME" link="/"/>
    </div>
  );
}
