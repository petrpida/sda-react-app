import React, { useState } from "react";
import NavButton from "../NavButton";
import './style.css'

export default function Joke() {
  const [joke, setJoke] = useState("");

  function getJoke () {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(function (response) {
        response.json()
      .then(function (data) {
          setJoke(data.value);
        });
      })
      .catch(function () {
        setJoke("ERROR");
      });
  };


  

  return (
    <div className="container">
      <h2>Chuch Norris Joke</h2>
        {joke === "" ? <p></p> :  <p className="joke">{joke}</p>}
      <button className="btn btn-warning btn-lg" onClick={()=>{getJoke()}}>{joke === "" ? "Give Me A Joke" : "Give Me One More"}</button>
      <NavButton name="HOME" link="/" />
    </div>
  );
}
