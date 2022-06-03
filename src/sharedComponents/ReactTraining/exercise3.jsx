import React from "react";
import NavButton from "../NavButton";
import Btn from "./btn";

export default function Exercise3 () {
    return (
        <div className="container">
            <h1>Exercise 3: Custom Components</h1>
            <div className="d-flex m-5">
                <Btn name="Button 1"/>
                <Btn name="Button 2"/>
                <Btn name="Button 3"/>
            </div>
            <NavButton name="Back" link="/reacttraining"/>
            <NavButton name="HOME" link="/"/>
        </div>
    )
}