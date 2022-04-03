import React, { useState } from "react";
import NavButton from "../NavButton";
import DisplayWeather from "./DisplayWeather";
import "./index.css"

export default function Weather() {
    const [errorMessage, setErrorMessage] = useState()
    const [weatherData, setWeatherData] = useState()
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")

    function isEmpty(value) {
        return value === ""
    }

    function getWeather() {
        if(isEmpty(city) || !isNaN(city)) {
            setErrorMessage("Enter city")
            return
        }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=86d5e1d08dc16532df94b4f5ce697faf`)
            .then(response => response.json())
            .then(responseData => {
                if(responseData.cod === 200) {
                    setWeatherData(responseData)
                } else {
                    alert(responseData.message)
                }  
            })
            .catch((error) => alert("Connection lost..."))
    }

    return (
        <div className="container">
        <div className="weather">
            <h1>Weather App</h1>
            <input className={errorMessage ? "bg-danger" : "" } type="text" placeholder="City" onChange={function(event) {
                setCity(event.target.value)
                setErrorMessage("")
            }}/>
            <input type="text" placeholder="Country" onChange={function(event) {
                setCountry(event.target.value)
            }}/>
            <button type="submit" onClick={function() {
                getWeather()
            }}>Submit</button>
            <div>{weatherData && <DisplayWeather data={weatherData}/>}</div>
        </div>
        <NavButton name="Home" link="/"/>
        </div>
    )
}