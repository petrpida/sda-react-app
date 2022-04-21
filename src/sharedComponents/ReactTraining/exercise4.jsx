import React, { useState } from "react";
import NavButton from "../NavButton";

export default function Exercise4 () {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>Exercise 4: State nad Props</h1>

            <p>Button has been clicked: {counter} times</p>
            <button onClick={()=>{setCounter(counter+1)}}>Click me!</button>
           
            <NavButton name="Back" link="/reacttraining"/>
            <NavButton name="HOME" link="/"/>
        </div>
    )
}