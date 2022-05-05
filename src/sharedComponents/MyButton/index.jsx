import React, {useState} from "react";

export default function Button({ buttonName, disableCounter, onClick }) {
  let [counter, setCounter] = useState(0)
  

  return (
    <div className="container">
      <button
      className="btn btn-primary w-50"
      onClick={function () {
        //window.alert((buttonName) + " was just clicked");
        counter = counter + 1
        // console.log(counter)
        setCounter(counter)
        onClick()
      }}
    >
      {buttonName}
    </button>
    {(disableCounter === false ? <p>"{buttonName}" button was clicked {counter} times</p> : <p></p>)}
    
    </div>
  );
}
