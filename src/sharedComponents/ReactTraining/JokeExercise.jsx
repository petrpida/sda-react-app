import React from "react";

export default function JokeExercise ( {title, text} ) {
    return (
        <div className="col bg-light m-3 rounded rounded-pill p-3">
            <h3 className="fw-bold text-center m-3">{title}</h3>
            <p className="lead text-center">{text}</p>
        </div>
    )
}