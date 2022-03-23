import React from "react";
import TableRow from "../TableRow";
import {Link} from 'react-router-dom'

export default function Table({rows, columns}) {
    let ths = []
    for (let i = 0; i < columns; i++) {
        ths.push(<th>COLUMN {i+1}</th>)
    }

    let trs = []
    for (let i = 0; i < rows; i++) {
        trs.push(<tr>
          <TableRow columns={columns} number={i+1}/>
         </tr>)
        }

  return (
    <div>
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
    <button className="menu">
          <Link to="/">HOME</Link>
        </button>
    </div>
  );
}
