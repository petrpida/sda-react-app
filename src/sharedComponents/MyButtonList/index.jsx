import React, { useState } from "react";
import Button from "../MyButton";

export default function MyButtonList({ buttonsObject }) {
  let buttons = [];
  let [totalCount, setTotalCount] = useState(0);

  for (let i = 0; i < buttonsObject.length; i++) {
    buttons.push(
      <Button
        buttonName={buttonsObject[i].text}
        disableCounter={buttonsObject[i].disableCounter}
        onClick={function () {
          totalCount = totalCount + 1;
          setTotalCount(totalCount);
        }}
      />
    );
  }

  return (
    <div>
      {buttons}
      <p>dohromady bylo kliknuto: {totalCount}x</p>
    </div>
  );
}
