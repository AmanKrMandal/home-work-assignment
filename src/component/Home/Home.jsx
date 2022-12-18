import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div>
      <p style={{ fontWeight: "700", fontSize: "28px" }}>Your Games</p>
      <p
        style={{
          fontFamily: "'Bilbo', cursive",
          fontSize: "44px",
          lineHeight: "81px",
          marginBottom: "10px",
          marginTop: "250px",
          textAlign: "center",
        }}
      >
        No Games<br></br>
        Found
      </p>
      <button
        onClick={() => {
          navigate("/NewGame");
        }}
        style={{ marginBottom: "145px" }}
      >
        Start a new game
      </button>
    </div>
  );
};

export default Home;
/*
import { useNavigate } from "react-router-dom";
let navigate = useNavigate();
onClick={() => {
  navigate("/");
}}
*/
