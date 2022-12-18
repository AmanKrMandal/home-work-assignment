import React, { useState } from "react";
import "./Move.css";
import Vector from "../images/Vector.png";
import cross from "../images/cross.png";
import zero from "../images/zero.png";

import { useNavigate } from "react-router-dom";
import Box from "../Box/Box";

const Move = () => {
  let navigate = useNavigate();

  const [data, setData] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [userData, setUserData] = useState("Your move");

  const check = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let find of winner) {
      const [a, b, c] = find;
      if (data[a] !== null && data[a] === data[b] && data[a] === data[c]) {
        return data[a];
      }
    }
    return false;
  };

  const win = check();
  console.log("win", win);

  const selectBox = (index) => {
    if (data[index] !== null) {
      return;
    }
    const user = [...data];
    user[index] = turn ? (
      <img src={cross} style={{ width: "60px" }} />
    ) : (
      <img src={zero} />
    );
    const ddd = turn ? "Their move" : "Your move";
    setData(user);
    setTurn(!turn);
    setUserData(ddd);
  };

  return (
    <div className="Move">
      <img
        style={{ marginBottom: "19px" }}
        src={Vector}
        onClick={() => {
          navigate("/Home");
        }}
      />
      <p style={{ fontWeight: "700", fontSize: "28px" }}>Game with Tanmay</p>
      <p>Your piece</p>
      <img style={{ width: "38.4px", height: "38.4px" }} src={cross} />
      <p
        style={{
          width: "100%",
          backgroundColor: "#FFE79E",
          textAlign: "center",
          padding: "15px 0px",
          marginBottom: "-2px",
        }}
      >
        {userData}
      </p>

      {/* ----------------------------------------------------------------- */}

      <div className="TicTac">
        <div className="row">
          <Box onClick={() => selectBox(0)} value={data[0]} />
          <Box onClick={() => selectBox(1)} value={data[1]} />
          <Box onClick={() => selectBox(2)} value={data[2]} />
        </div>
        <div className="row">
          <Box onClick={() => selectBox(3)} value={data[3]} />
          <Box onClick={() => selectBox(4)} value={data[4]} />
          <Box onClick={() => selectBox(5)} value={data[5]} />
        </div>
        <div className="row">
          <Box onClick={() => selectBox(6)} value={data[6]} />
          <Box onClick={() => selectBox(7)} value={data[7]} />
          <Box onClick={() => selectBox(8)} value={data[8]} />
        </div>
      </div>

      {/* ---------------------------------------------------------------------------- */}

      <button style={{ marginTop: "72px" }}>Submit!</button>
    </div>
  );
};

export default Move;
