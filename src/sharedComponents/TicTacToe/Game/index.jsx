import React from 'react';
import Board from '../Board';
import { Link } from 'react-router-dom';

export default function Game ({ gameName, players }) {
  
  return (
    <div>
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{ gameName }, number of players: { players }</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
    <button className="menu">
    <Link to="/">HOME</Link>
  </button>
  </div>
  );
}
