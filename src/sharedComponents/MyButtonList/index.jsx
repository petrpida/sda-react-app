import React, { useState } from "react";
import Button from "../MyButton";

export default function MyButtonList({ buttonsNames, disableCounters }) {
  let buttons = [];
  let [totalCount, setTotalCount] = useState(0);

  for (let i = 0; i < buttonsNames.length; i++) {
    buttons.push(
      <Button
        buttonName={buttonsNames[i]}
        disableCounter={disableCounters}
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
