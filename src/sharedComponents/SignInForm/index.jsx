import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "../NavButton";

export default function SignInForm() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="container">
      <form className="bg-light p-5 border border-1 rounded mb-5">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            className={
              "form-control" + (!username ? " border-danger border-2" : " border-success border-2")
            }
            type="text"
            onChange={function (event) {
              setUserName(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className={
              "form-control" + (!password ? " border-danger border-2" : " border-success border-2")
            }
            type="password"
            onChange={function (event) {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            className="mt-0 form-check-input"
            type="checkbox"
            onChange={function (event) {
              setRememberMe(event.target.checked);
            }}
          />
          <label className="form-check-label">Remember Me</label>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={function (e) {
              if (!username || !password) {
                window.alert("Please, fill out username and password!");
                e.preventDefault()
              } else if (rememberMe) {
                window.alert(
                  `Welcome back ${username}! We'll remember you for the next visit ;-)`
                );
                navigate("./signed");

              } else {
                window.alert(`Welcome back ${username}!`);
                navigate("./signed");

              }
            }}
          >
            SIGN IN
          </button>
        </div>
      </form>
      <NavButton name="HOME" link="/" />
    </div>
  );
}
