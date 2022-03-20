import React, { useEffect, useState} from "react";

export default function Joke() {
    const [joke, setJoke] = useState("")
    const [icon, setIcon] = useState()

    
    useEffect(function() {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(function(response) {
                response.json()
                    .then(function (data) {
                        setJoke(data.value)
                        setIcon(data.icon_url)
                    })
            }).catch(function() {
                setJoke("ERROR")
            })
    }, [])

    return (
    <div>
        {icon && <img src={icon}/>}
        {joke}</div>)
}