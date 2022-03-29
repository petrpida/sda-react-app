import React from "react";
import NavButton from "../NavButton";

export default function Exercise1() {
  return (
    <div>
      <h1>Exercise 1: "Hello, World!"</h1>
      <div className="ex1">Hello, World!</div>
      <NavButton name="Back" link="/reacttraining"/>
      <NavButton name="HOME" link="/"/>
    </div>
  );
}
