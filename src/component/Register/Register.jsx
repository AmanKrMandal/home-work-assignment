import React from "react";
import "./Register.css";
import Vector from "../images/Vector.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  return (
    <div className="Register">
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
      <p>Your name</p>
      <input placeholder="Type your name here" />
      <p>Username</p>
      <input placeholder="Type your username here" />
      <p>Email</p>
      <input placeholder="Type your email here" />
      <p>Password</p>
      <input placeholder="Type your password here" />
      <br></br>
      <button
        onClick={() => {
          navigate("/Login");
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
