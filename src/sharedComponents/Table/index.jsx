import React from "react";
import TableRow from "../TableRow";
import NavButton from "../NavButton";

export default function Table({ rows, columns }) {
  let ths = [];
  for (let i = 0; i < columns; i++) {
    ths.push(<th>COLUMN {i + 1}</th>);
  }

  let trs = [];
  for (let i = 0; i < rows; i++) {
    trs.push(
      <tr>
        <TableRow columns={columns} number={i + 1} />
      </tr>
    );
  }

  return (
    <div className="myTable">
      <div className="container">
        <table className="table table-primary table-hover">
          <thead>
            <tr>{ths}</tr>
          </thead>
          <tbody>{trs}</tbody>
        </table>
      </div>
      <NavButton name="HOME" link="/" />
    </div>
  );
}
