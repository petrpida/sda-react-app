import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function SignInForm() {
    const navigate = useNavigate()
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div>form
            <input placeholder="username" type="text" onChange={function (event) {
                setUserName(event.target.value)
            }} />
            <input placeholder="password" type="password" onChange={function (event) {
                setPassword(event.target.value)
            }}/>
            remember me <input type="checkbox" onChange={function (event) {
                setRememberMe(event.target.checked)
            }}/>
            <button onClick={function () {
                console.log({username, password, rememberMe});
                navigate("/")
            }}>SIGN IN</button>
        </div>
    )
}