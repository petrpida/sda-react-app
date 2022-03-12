import React, { useState } from 'react';

function Counter() {
  const state = useState(0);
  const counter = state[0];
  const setCounter = state[1];

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  return <div>
    <h1>Moje jméno a příjmení je: {name} {surname}</h1>
    <h2>Jméno</h2>
    <input type="text" onChange={(e) => setName(e.target.value)} />
    <h2>Příjmení</h2>
    <input type="text" onChange={(e) => setSurname(e.target.value)} />
    <button onClick={() => setCounter(counter - 1)}>Decrease counter</button>
    <button onClick={() => setCounter(counter + 1)}>Increase counter</button>
  </div>
}

export default Counter;