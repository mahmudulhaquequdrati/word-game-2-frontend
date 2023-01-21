import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useGStore } from "../../ContextApi/Context";
import "./Days.css";


const Days = () => {
  const navigate = useNavigate();
  const {user , words , userRefetch ,wordRefetch } = useGStore();
  const email = localStorage.getItem("email");
  useEffect(()=>{
    if(email){
      userRefetch() 
      wordRefetch()
    }
  },[words])

  const dateForRecordTime = new Date().toLocaleDateString()
  console.log(user)

 useEffect(()=>{
  if(parseInt(dateForRecordTime)){
    axios.put(`https://word-game-2-backend.vercel.app/dayCompleted?email=${email}`,).then(res =>{
      // console.log(res.data);
    }).catch(err =>console.log(err));
  }
 },[dateForRecordTime])
 

 
  const date = JSON.parse(localStorage.getItem("user"))?.date;
  // console.log(date);

  return (
    <div className="body">
      <div className="days-container">
        <div>
          <h3>Puzzle Days</h3>
        </div>
        <div className="day-content">
          {words?.map((word) => (
            <button
              key={word._id}
              className={`days-btn ${!word.date && "gay-color"}`}
              disabled={word.completed || !word.date}
              onClick={() => navigate(`/home/${word.day}`)}
            >
            {/* Day {word.day} */}
              Day {word.day} 
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Days;
