import React from "react";
import Button from "../MyButton";

export default function MyButtonList({buttonsNames, disableCounters}) {
    let buttons = []
    for (let i = 0; i < buttonsNames.length; i++) {
        buttons.push(<Button buttonName={buttonsNames[i]} disableCounter={disableCounters} />)
    }
    return buttons
}