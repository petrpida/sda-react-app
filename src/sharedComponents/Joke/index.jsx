import React, { useEffect, useState} from "react";
import { Link } from 'react-router-dom'

export default function Joke() {
    const [joke, setJoke] = useState("")
    
    useEffect(function() {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(function(response) {
                response.json()
                    .then(function (data) {
                        setJoke(data.value)
                    })
            }).catch(function() {
                setJoke("ERROR")
            })
    }, [])

    return (
    <div>
        <h2>{joke}</h2>
        <button className="menu">
          <Link to="/">HOME</Link>
        </button>
        </div>)
}