import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0); 
    // const state = useState(0);
    // const counter = state[0];
    // const setCounter = state[1]; 

    return <div>
        <h1>This is my counter: {counter}</h1>
        <button onClick={() => setCounter(counter-1)}>Decrease counter</button>
        <button onClick={() => setCounter(counter+1)}>Increase counter</button>
        </div>
}

export default Counter;