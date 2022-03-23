import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'

export default function SignInForm() {
    const navigate = useNavigate()
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div>
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
                window.alert(`Your username is ${username} and your password is ${password}`);
                //navigate("/")
            }}>SIGN IN</button>
            <button className="menu">
          <Link to="/">HOME</Link>
        </button>
        </div>
    )
}