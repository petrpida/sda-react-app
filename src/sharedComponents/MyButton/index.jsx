import React, {useState} from "react";

export default function Button({ buttonName, disableCounter, onClick }) {
  let [counter, setCounter] = useState(0)
  

  return (
    <div><button
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
    {(disableCounter === false ? <p>na tlacitko {buttonName} bylo kliknuto {counter}x</p> : <p></p>)}
    
    </div>
  );
}
