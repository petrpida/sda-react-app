import React from "react";

export default function Button() {
  return (
    <button
      onClick={function() {window.alert("You have just clicked on the BUTTON")}}
    >
      BUTTON
    </button>
  );
}
