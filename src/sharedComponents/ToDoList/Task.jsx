import React, { useState } from "react";

export default function Task({ name, remove, id }) {
    const [done, setDone] = useState(false)

    return(
        <div>
            <p className={done ? "text-decoration-line-through" : ""}>{name}</p>
            <div>
                <button className="btn btn-success" onClick={function() {
                    setDone(true)
                }}>fajfka</button>
                <button className="btn btn-danger" onClick={function() {
                    remove()
                }}>krizek</button>
            </div>
        </div>
    )
}
