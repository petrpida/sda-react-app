import React from 'react';
import Board from '../Board';
import NavButton from '../../NavButton';

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
    <NavButton name="HOME" link="/" />
  </div>
  );
}
