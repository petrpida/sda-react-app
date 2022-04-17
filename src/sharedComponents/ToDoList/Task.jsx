import React from "react";

export default function Task({ task, index, markTask, removeTask }) {

    return(
        <div>
            <p className={task.isDone ? "text-decoration-line-through" : ""}>{task.name}</p>
            <div>
                <button className="btn btn-success" onClick={() => {
                    markTask(index)
                }}>fajfka</button>
                <button className="btn btn-danger" onClick={() => {
                    removeTask(index)
                }}>krizek</button>
            </div>
        </div>
    )
}
