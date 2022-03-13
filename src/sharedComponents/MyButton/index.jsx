import React, {useState} from "react";

export default function Button({ buttonName, disableCounter }) {
  let [counter, setCounter] = useState(0)
  console.log(counter)
  

  return (
    <div><button
      onClick={function () {
        //window.alert((buttonName) + " was just clicked");
        counter = counter + 1
        // console.log(counter)
        setCounter(counter)
      }}
    >
      {buttonName}
    </button>
    {(disableCounter === false ? <p>na {buttonName} bylo kliknuto {counter}x</p> : <p></p>)}
    
    </div>
  );
}
