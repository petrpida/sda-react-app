import React from "react";
import NavButton from "../NavButton";

export default function Exercise5 () {
const arr = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

    return (
        <div>
            <h1 className="m-5 text-center">Exercise 5: Mapping Through A List And Rendering</h1>

            <ul className="mx-auto w-25 list-group list-group-flush">
                {arr.map(el => <li className="list-group-item text-center">{el}</li>)}
            </ul>

            <NavButton name="Back" link="/reacttraining"/>
            <NavButton name="HOME" link="/"/>
        </div>
    )
}