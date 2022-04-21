import React from "react";
import NavButton from "../NavButton";

export default function Exercise5 () {
const arr = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

    return (
        <div>
            <h1>Exercise 5: Mapping Through A List And Rendering</h1>

            <ul>
                {arr.map(el => <li>{el}</li>)}
            </ul>

            <NavButton name="Back" link="/reacttraining"/>
            <NavButton name="HOME" link="/"/>
        </div>
    )
}