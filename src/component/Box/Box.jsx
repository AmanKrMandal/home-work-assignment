import React from "react";
import "./Box.css";

const Box = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "5px solid #FFE79E",
        height: "90px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{props.value}</p>
    </div>
  );
};

export default Box;
