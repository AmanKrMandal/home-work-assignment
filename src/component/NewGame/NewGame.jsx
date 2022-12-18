import React from "react";
import "./NewGame.css";
import Vector from "../images/Vector.png";
import { useNavigate } from "react-router-dom";

const NewGame = () => {
  let navigate = useNavigate();

  return (
    <div className="NewGame">
      <img
        style={{ marginBottom: "19px" }}
        src={Vector}
        onClick={() => {
          navigate("/Home");
        }}
      />
      <p>Start a new game</p>
      <p style={{fontSize: "28px",lineHeight: "32px"}}>
        Whom do you want <br></br>to play with?
      </p>
      <p>Email</p>
      <input style={{marginBottom:"334px"}} placeholder="Type their email here" />
      <button onClick={() => {
          navigate("/Move");
        }}>Start game</button>
    </div>
  );
};

export default NewGame;
