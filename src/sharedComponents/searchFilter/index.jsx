import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Search({ values }) {
  let [inputValue, setInputValue] = useState("");
  let inputLowerCase = inputValue.toLowerCase();
  let valuesLowerCase = values.map((el) => (el.toLowerCase()))

  let renderArray = valuesLowerCase.filter(el => el.includes(inputLowerCase))

  return (
    <div>
        <input type="text" placeholder="Search" onChange={function (event) {
            setInputValue(event.target.value)
        }}/>
        
        <ul className="search">
            {renderArray.map((item) => (<li>{item}</li>))}
        </ul>

      <button className="menu">
        <Link to="/">HOME</Link>
      </button>
    </div>
  );
}
