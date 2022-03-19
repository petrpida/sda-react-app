import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getNewsDetail } from "../../serverMock";

export default function NewsEditForm() {
    const params = useParams()
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    useEffect(function () {
        getNewsDetail(Number(params.id))
            .then(function (response) {
                console.log(response)
            })
    })

    return (
        <div>
            <input placeholder="title" type="text" onChange={function (event) {
                setTitle(event.target.value)
            }} />
            <input placeholder="text"  onChange={function (event) {
                setText(event.target.value)
            }}/>
           
            <button onClick={function () {
                
            }}>SAVE</button>
        </div>
    )
}