import React from "react";
import NavButton from "../NavButton";
import './styles.css'

export default function Exercise6 ({arr}) {

    return (
        <div>
            <h1>Exercise 6: Mapping Through A List And Rendering (With A Custom Component)</h1>

            <ul className="training-ul">
                {arr.map((el, index) => <li key={index} className="training-li">{el}</li>)}
            </ul>

            <NavButton name="Back" link="/reacttraining"/>
            <NavButton name="HOME" link="/"/>
        </div>
    )
}