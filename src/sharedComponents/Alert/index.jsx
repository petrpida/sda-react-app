import React from "react";
import { useParams, Link } from "react-router-dom";

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
      <div>
        <div className={backgroundColor} role="alert">
          This is alert no.{params.id}: <br /> <br /> "{text}"
        </div>
        <button className="menu">
          <Link to="/">HOME</Link>
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>no show</p>
        <button className="menu">
          <Link to="/">HOME</Link>
        </button>
      </div>
    );
  }
}
