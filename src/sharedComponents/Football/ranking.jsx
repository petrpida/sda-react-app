import React from "react";
import NavButton from "../NavButton";
import NavBar from "./navBar";
import { teams, games } from "./data"

export default function Ranking() {

  function getValues(team) {
     const values = {
       name: team.team,
       gamesPlayed: 0,
       wins: 0,
       draws: 0,
       losses: 0,
       goalsActive: 0,
       goalsPasive: 0,
       score: "",
       points: 0
     }

     games.forEach((item) => {
       if (team.id === item.homeTeam) {
         values.gamesPlayed += 1
         values.goalsActive += item.homeTeamGoals
         values.goalsPasive += item.awayTeamGoals
         if (item.homeTeamGoals > item.awayTeamGoals) {
           values.wins += 1
           values.points += 3
         }
         if (item.homeTeamGoals === item.awayTeamGoals) {
           values.draws += 1
           values.points += 1
         }
         if (item.homeTeamGoals < item.awayTeamGoals) {
           values.losses += 1
         }
       }
       if (team.id === item.awayTeam) {
        values.gamesPlayed += 1
        values.goalsActive += item.awayTeamGoals
        values.goalsPasive += item.homeTeamGoals
        if (item.homeTeamGoals < item.awayTeamGoals) {
          values.wins += 1
          values.points += 3
        }
        if (item.homeTeamGoals === item.awayTeamGoals) {
          values.draws += 1
          values.points += 1
        }
        if (item.homeTeamGoals > item.awayTeamGoals) {
          values.losses += 1
        }
      }
     })

     values.score = `${values.goalsActive} : ${values.goalsPasive}`

     return values
  }

  const teamsCounted = teams.map((item) => {
    return getValues(item)
  })

  return (
    <div>
      <NavBar active="ranking"/>
      <main>
        <div className="container">
        <table>
            <thead>
              <tr>
              <th>rank</th>
              <th>club</th>
              <th>games</th>
              <th>wins</th>
              <th>draws</th>
              <th>losses</th>
              <th>score</th>
              <th>points</th>
              </tr>
            </thead>
            <tbody>
              {teamsCounted
              .sort((a, b) => {
                if (a.points > b.points) return -1
                if (a.points < b.points) return 1
                if ((a.goalsActive - a.goalsPasive) > (b.goalsActive - b.goalsPasive)) return -1
                if ((a.goalsActive - a.goalsPasive) < (b.goalsActive - b.goalsPasive)) return 1
                if (a.goalsActive > b.goalsActive) return -1
                if (a.goalsActive < b.goalsActive) return 1
                return 0
              })
              .map((item, index) => {
                return <tr key={index}>
                  <td>{index + 1 + "."}</td>
                  <td>{item.name}</td>
                  <td>{item.gamesPlayed}</td>
                  <td>{item.wins}</td>
                  <td>{item.draws}</td>
                  <td>{item.losses}</td>
                  <td>{item.score}</td>
                  <td>{item.points}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </main>
      <NavButton name="HOME" link="/"/>
    </div>
  );
}
