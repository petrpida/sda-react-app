import React from "react";
import NavButton from "../NavButton";

export default function Exercise2() {
    return (
        <div className="container">
            <h1>Exercise 2: Capturing User Click</h1>
            <button className="btn btn-large btn-primary m-5" onClick={function () {window.alert("Clicked!")}}>Click Me!</button>
            <NavButton name="Back" link="/reacttraining"/>
            <NavButton name="HOME" link="/"/>
        </div>
    )
}