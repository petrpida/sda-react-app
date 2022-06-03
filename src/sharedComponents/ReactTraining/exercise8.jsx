import React from "react";
import NavButton from "../NavButton";
import JokeExercise from "./JokeExercise";

const data = [
  {
    id: "1",
    setup: "What's the best thing about a Boolean?",
    punchline: "Even if you're wrong, you're only off by a bit"
  },
  {
    id: "2",
    setup: "Why do programmers wear glasses?",
    punchline: "Because they need to C#"
  }
];

export default function Exercise8 () {

  return (
    <div>
      <h1 className="m-5 text-center">Exercise 8: Rendering JSON</h1>
    <div className=" bg-success p-2 text-dark bg-opacity-25 rounded m-5">
      <div className="row">
        {data.map((el, index) => (<JokeExercise key={index} title={el.setup} text={el.punchline}/>))}
      </div>
    </div>
    <NavButton name="Back" link="/reacttraining"/>
    <NavButton name="HOME" link="/"/>
    </div>
  )
}


