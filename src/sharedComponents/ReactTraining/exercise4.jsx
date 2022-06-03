import React, { useState } from "react";
import NavButton from "../NavButton";

export default function Exercise4 () {
    const [counter, setCounter] = useState(0)

    return (
        <div className="container">
            <h1 className="mb-5">Exercise 4: State nad Props</h1>

            <h5>Button has been clicked: {counter} times</h5>
            <button className="btn btn-large btn-primary mb-5" onClick={()=>{setCounter(counter+1)}}>Click me!</button>
           
            <NavButton name="Back" link="/reacttraining"/>
            <NavButton name="HOME" link="/"/>
        </div>
    )
}