import React from "react";

export default function TableRow({columns, number}) {
    let tds = []

    for (let i = 0; i < columns; i++) {
        tds.push(
            <td>row {number}, col {i+1}</td>
        )

    }
    return tds
}