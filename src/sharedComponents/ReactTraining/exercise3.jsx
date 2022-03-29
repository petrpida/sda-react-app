import React from "react";
import NavButton from "../NavButton";
import Btn from "./btn";

export default function Exercise3 () {
    return (
        <div>
            <h1>Exercise 3: Custom Components</h1>
            <Btn name="Button 1"/>
            <Btn name="Button 2"/>
            <Btn name="Button 3"/>
            <NavButton name="Back" link="/reacttraining"/>
            <NavButton name="HOME" link="/"/>
        </div>
    )
}