import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <h1>this is HOME <Link to="/news">go to NEWS</Link></h1>
    )
}