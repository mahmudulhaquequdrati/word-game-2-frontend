import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BtnComponent from "../stopwatch/btn-component/BtnComponent";
import Display from "../stopwatch/display/Display";
import "./FinalResult.css";

const FinalResult = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/days");
  };
  return (
    <div className="result-container">
      <div>
        <h3>Pass Gas</h3>
      </div>
      <div>
        <h1>BOOM</h1>
      </div>
      <div className="details-box">
        <div>
          <p>completed</p>
          <p>22</p>
        </div>
        <div>
          <p>Total time</p>
        </div>
      </div>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          margin: "10px",
        }}
        onClick={handleHome}
      >
        Home
      </button>
    </div>
  );
};

export default FinalResult;
