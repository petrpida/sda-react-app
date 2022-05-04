import React from "react";



export default function NavBar () {

    const links = ['teams', 'games', 'ranking']
    
    return (
        <ul>
            {links.map((item, index) => {
                return <li key={index}><a href={item}>{item}</a></li>
            })}
        </ul>
    )
}