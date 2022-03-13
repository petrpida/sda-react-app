import React from "react";

export default function Button({buttonName}) {
  return (
    <button
      onClick={function() {window.alert("You have just clicked on the BUTTON")}}
    >
      {buttonName}
    </button>
  );
}
