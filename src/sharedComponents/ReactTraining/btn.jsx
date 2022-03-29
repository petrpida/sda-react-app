import React from "react";

export default function Btn({name}) {
    return (
        <button className="ex3" onClick={function () {
            window.alert(`You clicked on ${name}`)
        }}>{name}</button>
    )
}