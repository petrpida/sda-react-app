import React from "react";

export default function Person ({ link, firstName, lastName }) {
    return (
        
            <div className="col col-3 bg-light m-3 rounded p-3 ">
                <img className="row w-75 h-75" src={link} alt="avatar" />
                <h3 className="row fw-bold text-center m-3">{firstName} {lastName}</h3>
            </div>
    )
}