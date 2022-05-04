import React from "react";
import { Link } from "react-router-dom";

export default function NavButton({name, link}) {
    return (
        <div className="menuButton">
        <Link to={link}><button className="menu">{name}</button></Link>
        </div>
    )
}