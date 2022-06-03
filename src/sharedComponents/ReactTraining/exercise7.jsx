import React, { useState } from "react";
import NavButton from "../NavButton";
import './styles.css'

export default function Exercise7 () {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()

    const greet = function() {
        
        if (firstName && lastName) {
            alert(`Hello ${firstName} ${lastName}!`)
            return
        }

        alert("Please fill out first and last name")
    }


    return (
        <div>
            <h1 className="m-5 text-center">Exercise 7: Building A Form</h1>
            <form className="mb-5 d-flex flex-column align-items-center">
                <input className="form-control w-25 mb-3" type="text" placeholder="First name" onChange={(event)=>{setFirstName(event.target.value)}}/>
                <input className="form-control w-25 mb-3" type="text" placeholder="Last name" onChange={(event)=>{setLastName(event.target.value)}}/>
                <button className="btn btn-primary w-25" onClick={greet} >Greet Me!</button>
            </form>

            <NavButton name="Back" link="/reacttraining"/>
            <NavButton name="HOME" link="/"/>
        </div>
    )
}