import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>HOME page </h1>
      <button className="menu">
        <Link to="/alert/1">Bootstrap Alert</Link>
      </button>
      <button className="menu">
        <Link to="/counter">Counter</Link>
      </button>
      <button className="menu">
        <Link to="/joke">Chuck Norris joke</Link>
      </button>
      <button className="menu">
        <Link to="/menu">Menu</Link>
      </button>
      <button className="menu">
        <Link to="/buttons">Buttons List</Link>
      </button>
      <button className="menu">
        <Link to="/news">News</Link>
      </button>
      <button className="menu">
        <Link to="/news/:id">News Edit Form</Link>
      </button>
      <button className="menu">
        <Link to="/form">Sign In Form</Link>
      </button>
      <button className="menu">
        <Link to="/table">Table</Link>
      </button>
      <button className="menu">
        <Link to="/tictactoe">TicTacToe</Link>
      </button>
      <button className="menu">
          <Link to="/search">Search Filter</Link>
      </button>
      <button className="menu">
          <Link to="/training">React Training</Link>
      </button>
    </div>
  );
}
