import React from "react";

export default function Button({ buttonName }) {
  return (
    <button
      onClick={function () {
        window.alert((buttonName) + " was just clicked");
      }}
    >
      {buttonName}
    </button>
  );
}
