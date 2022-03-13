import React, {useState} from "react";

export default function Button({ buttonName }) {
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
    <p>na {buttonName} bylo kliknuto {counter}x</p>
    </div>
  );
}
