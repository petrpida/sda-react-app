import React, { useState } from "react";
import Button from "../MyButton";
import NavButton from "../NavButton";

export default function MyButtonList({ buttonsObject }) {
  let buttons = [];
  let [totalCount, setTotalCount] = useState(0);

  for (let i = 0; i < buttonsObject.length; i++) {
    buttons.push(
      <Button
        buttonName={buttonsObject[i].text}
        disableCounter={buttonsObject[i].disableCounter}
        onClick={function () {
          //totalCount = totalCount + 1;
          setTotalCount(totalCount+=1);
        }}
      />
    );
  }

  return (
    <div className="container">
      <div className="border border-secondary border-1 rounded w-75">
      {buttons}
      <p className="text-center fs-5 my-3">all button clicks: {totalCount}</p>
      </div>
      <NavButton name="HOME" link="/" />
    </div>
  );
}
