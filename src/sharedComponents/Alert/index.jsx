import React from "react";
import { useParams } from "react-router-dom";
import NavButton from "../NavButton";

export default function Alert({ show, text, color }) {
  let backgroundColor = "";
  const params = useParams();

  if (color === "red") {
    backgroundColor = "alert alert-danger";
  } else if (color === "orange") {
    backgroundColor = "alert alert-warning";
  } else if (color === "green") {
    backgroundColor = "alert alert-success";
  }

  if (show) {
    return (
      <div className="m-5">
        <div className={backgroundColor + " text-center w-75 mx-auto"} role="alert">
          This is alert no.{params.id}
          <div className="pt-3">{text}</div> 
        </div>
        <NavButton name="HOME" link="/"/>
      </div>
    );
  } else {
    return (
      <div>
        <p>no show</p>
        <NavButton name="HOME" link="/"/>
      </div>
    );
  }
}
