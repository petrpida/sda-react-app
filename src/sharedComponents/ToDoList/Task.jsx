import React from "react";

export default function Task({ task, index, markTask, removeTask }) {

    return(
        <div className="border border-secondary border-1 rounded-3 pt-3 pb-3 ps-3 mb-3">
            <div className="fs-3"><p className={task.isDone ? "text-decoration-line-through" : ""}>{task.name}</p>
            </div>
            <div>
                <button className="btn btn-success border border-2 border-dark" onClick={() => {
                    markTask(index)
                }}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg></button>
                <button className="btn btn-danger border border-2 border-dark ms-1" onClick={() => {
                    removeTask(index)
                }}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg></button>
            </div>
        </div>
    )
}
