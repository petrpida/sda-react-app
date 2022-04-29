import React, { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom'
import NavButton from "../NavButton";

export default function Search({ values }) {
  let [inputValue, setInputValue] = useState("");

  const [searchParams, setSearchParams] = useSearchParams()
  const defaultValue = searchParams.get("defaultValue")

  useEffect(function() {
    if (defaultValue) {
      setInputValue(defaultValue)
    }
  }, [defaultValue])


  return (
    <div>
        <input defaultValue={defaultValue} type="text" placeholder="Search" onChange={function (event) {
            setInputValue(event.target.value)
        }}/>
        
        <ul className="search">
            {values
            .filter((el) => el.toLowerCase().includes(inputValue.toLocaleLowerCase()))
            .map((item) => (<li key={item}>{item}</li>))}
        </ul>

        <NavButton name="HOME" link="/" />
    </div>
  );
}
