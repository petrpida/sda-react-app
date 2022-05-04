import React from "react";
import NavButton from "../NavButton";
import NavBar from "./navBar";
import { games, teams } from "./data";

export default function Games() {
  const gamesCopy = [...games];

  function findTeamById(id) {
    return teams.find((team) => {
      return team.id === id;
    });
  }

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function formatDate(date) {
    const ar = date.split("-");

    return `${ar[2]} / ${ar[1]} / ${ar[0]}`
      
  }

  return (
    <div>
      <nav>
        <div>Naše liga</div>
        <NavBar />
      </nav>
      <main>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>date</th>
                <th>home</th>
                <th></th>
                <th>away</th>
                <th>result</th>
              </tr>
            </thead>
            <tbody>
              {gamesCopy
                .sort((a, b) => a.date.localeCompare(b.date))
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{formatDate(item.date)}</td>
                      <td>{findTeamById(gamesCopy[index].homeTeam).team}</td>
                      <td>-</td>
                      <td>{findTeamById(gamesCopy[index].awayTeam).team}</td>
                      <td>
                        {item.homeTeamGoals} : {item.awayTeamGoals}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </main>
      <NavButton name="HOME" link="/" />
    </div>
  );
}
