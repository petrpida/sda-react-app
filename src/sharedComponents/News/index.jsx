import React from "react";
import { Link } from 'react-router-dom'
import NavButton from "../NavButton";

export default function News() {
    return (
        <div>
            this is NEWS 
            <Link to="/news/1"> news 1 </Link>
            <Link to="/news/2"> news 2 </Link>
            <Link to="/news/3"> news 3 </Link>
            <NavButton name="HOME" link="/" />
        </div>
    )
}