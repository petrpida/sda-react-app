import React from "react";
import { useParams } from 'react-router-dom'

export default function NewsDetail() {
    const params = useParams()
    console.log(params)
    return (
        <div>toto je detail novinky {params.id}</div>
    )
}