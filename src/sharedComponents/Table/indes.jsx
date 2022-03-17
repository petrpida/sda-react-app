import React, { useState } from "react";

export default function Table({rows, columns}) {
    let [numberOfRows, setNumberOfRows] = useState(1)
    let counter = 1
    let ths = []
    for (let i = 0; i < columns; i++) {
        ths.push(<th>COLUMN {i+1}</th>)
    }

    let tds = []
    for (let i = 0; i < columns; i++) {
        tds.push(<td>col {i+1}, row {counter}</td>)
    }

    let trs = []
    for (let i = 0; i < rows; i++) {
        trs.push(<tr>
          {tds}
         </tr>)
        }

  return (
    <div className="myTable">
      <table>
        <thead>
          <tr>
            {ths}
          </tr>
        </thead>
        <tbody>
            {trs}
        </tbody>
      </table>
    </div>
  );
}
