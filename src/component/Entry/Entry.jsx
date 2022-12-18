import React from "react";
import "./Entry.css";
import { useNavigate } from "react-router-dom";

const Entry = () => {
  let navigate = useNavigate();

  return (
    <div className="entry">
      <p style={{ fontSize: "36px", paddingTop: "138px" }}>async</p>
      <p style={{ fontSize: "73px", marginTop: "90px" }}>tic tac </p>
      <p style={{ fontSize: "73px", marginTop: "125px" }}>toe</p>
      <button
        style={{ background: "#F2C94C", border: "#F2C94C" }}
        onClick={() => navigate("/Login")}
      >
        Login
      </button>
      <br></br>
      <button
        style={{ background: "#2F80ED", border: "#2F80ED" }}
        onClick={() => navigate("/Register")}
      >
        Register
      </button>
    </div>
  );
};

export default Entry;
