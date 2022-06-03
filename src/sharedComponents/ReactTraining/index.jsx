import React from "react";
import NavButton from "../NavButton";

export default function ReactTraning() {
  return (
    <div className="container">
      <h1>React Training</h1>
      <h6>source: <a className="text-decoration-underline" target="_blank" rel="noreferrer" href="http://coderfiles.dev/blog/reactjs-coding-exercises/">coderfiles.dev</a></h6>
      <NavButton name="Exercise 1" link="./exercise1"/>
      <NavButton name="Exercise 2" link="./exercise2"/>
      <NavButton name="Exercise 3" link="./exercise3"/>
      <NavButton name="Exercise 4" link="./exercise4"/>
      <NavButton name="Exercise 5" link="./exercise5"/>
      <NavButton name="Exercise 6" link="./exercise6"/>
      <NavButton name="Exercise 7" link="./exercise7"/>
      <NavButton name="Exercise 8" link="./exercise8"/>
      <NavButton name="Exercise 9" link="./exercise9"/>
      <NavButton name="HOME" link="/"/>
    </div>
  );
}
