import React from 'react'
import Vector from "../images/Vector.png";
import { useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className='login'>
      <img
        style={{ marginBottom: "19px" }}
        src={Vector}
        onClick={() => {
          navigate("/");
        }}
      />
      <p>Create account</p>
      <p style={{ fontWeight: "700", fontSize: "28px", lineHeight: "35px" }}>
        Let’s get to know <br></br>you better!
      </p>
      <p>Username</p>
      <input placeholder="Type your username here" />
      <p>Password</p>
      <input placeholder="Type your name here" />
      <br></br>
      <button onClick={() => {
  navigate("/Home");
}}>Login</button>
    </div>
  )
}

export default Login


/*
import { useNavigate } from "react-router-dom";
let navigate = useNavigate();
onClick={() => {
  navigate("/");
}}
*/