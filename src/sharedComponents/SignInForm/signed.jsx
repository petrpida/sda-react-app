import React from "react";
import NavButton from "../NavButton";

export default function Signed () {
    return (
        <div className="d-flex flex-column mt-5">
            <h2 className="text-center">You have been successfuly logged in!</h2>
            <NavButton name="Back" link="/form"/>
            <NavButton name="HOME" link="/"/>
        </div>
    )
}