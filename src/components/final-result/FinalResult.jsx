import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGStore } from "../../ContextApi/Context";
import BtnComponent from "../stopwatch/btn-component/BtnComponent";
import Display from "../stopwatch/display/Display";
import "./FinalResult.css";

const FinalResult = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const {user,wordRefetch} = useGStore()
  const email = localStorage.getItem("email");
  const handleHomeAndCompletedTask = () => {
    axios.put(`https://word-game-2-backend.vercel.app/completed?email=${email}&day=${user.day}`).then(res => {
      console.log(res.data)
      wordRefetch()
      navigate("/days");
    }).catch(err => console.error(err));
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
          <p>{state}</p>
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
        onClick={handleHomeAndCompletedTask}
      >
        Home
      </button>
    </div>
  );
};

export default FinalResult;
