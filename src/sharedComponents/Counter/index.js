import React, { useState } from "react";
import NavButton from "../NavButton";
import "./styles.css"

function Counter() {
  const state = useState(0);
  const counter = state[0];
  const setCounter = state[1];

  return (
    <div className="container counter">
      <div className="d-flex flex-column p-3 border border-2 rounded">
        <div>
        <button className="btn btn-primary m-1" onClick={() => setCounter(counter - 1)}>
          Decrease counter
        </button>
        <button className="btn btn-primary m-1" onClick={() => setCounter(counter + 1)}>
          Increase counter
        </button>
        </div>
        <h1 className="m-3">{counter}</h1>
        <button className="btn btn-primary w-100" onClick={() => setCounter(0)}>
          Reset
        </button>
      </div>
      <NavButton name="HOME" link="/"/>
    </div>
  );
}

export default Counter;
