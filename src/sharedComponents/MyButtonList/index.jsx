import React from "react";
import Button from "../MyButton";

export default function MyButtonList({buttonsCount, disableCounters}) {
    const buttons = []
    for (let i = 0; i < buttonsCount; i++) {
        buttons.push(<Button buttonName={"button " + (i + 1)} disableCounter={disableCounters} />)
    }

    return buttons
}