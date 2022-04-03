import React from "react";

export default function Task({ name, isDone }) {
    return(
        <div>
            <p className={isDone ? "text-decoration-line-through" : ""}>{name}</p>
            <div>
                <button className="btn btn-success">fajfka</button>
                <button className="btn btn-danger">krizek</button>
            </div>
        </div>
    )
}
