import React, { useState } from "react";
import { Link } from 'react-router-dom'

function Counter() {
  const state = useState(0);
  const counter = state[0];
  const setCounter = state[1];

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <div>
      <h2>
        My name and surname is: {name} {surname}
      </h2>
      <p>Name</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Surname</p>
      <input type="text" onChange={(e) => setSurname(e.target.value)} />
      <br/> <br/>
      <div>
        <button onClick={() => setCounter(counter - 1)}>
          Decrease counter
        </button>
        <button onClick={() => setCounter(counter + 1)}>
          Increase counter
        </button>
        <h1>{counter}</h1>
      </div>
      <button className="menu">
          <Link to="/">HOME</Link>
        </button>
    </div>
  );
}

export default Counter;
