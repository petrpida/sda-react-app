import React from "react";
import NavButton from "../NavButton";

export default function Home() {
  return (
    <div className="container">
      <h1>HOME page</h1>
      <NavButton name="Bootstrap Alert" link="/alert/1"/>
      <NavButton name="Counter" link="/counter"/>
      <NavButton name="Chuck Norris joke" link="/joke"/>
      <NavButton name="Menu" link="/menu"/>
      <NavButton name="Buttons List" link="/buttons"/>
      <NavButton name="News" link="/news"/>
      <NavButton name="News Edit Form" link="/news/:id"/>
      <NavButton name="Sign In Form" link="/form"/>
      <NavButton name="Table" link="/table"/>
      <NavButton name="TicTacToe" link="/tictactoe"/>
      <NavButton name="Search Filter" link="/search"/>
      <NavButton name="React Training" link="/reacttraining"/>
      <NavButton name="Weather App" link="/weather"/>
      <NavButton name="Phone number validation" link="/phone"/>
      <NavButton name="ToDo List" link="/todo"/>
      <NavButton name="Contact List" link="/contacts"/>
      <NavButton name="Football League" link="/teams"/>
    </div>
  );
}
