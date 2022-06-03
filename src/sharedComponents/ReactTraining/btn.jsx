import React from "react";

export default function Btn({name}) {
    return (
        <button className="btn btn-large btn-primary m-3" onClick={function () {
            window.alert(`You clicked on ${name}`)
        }}>{name}</button>
    )
}