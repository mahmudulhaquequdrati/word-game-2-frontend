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

  console.log(user);

  useEffect(()=>{
    if(email){
      userRefetch() 
      wordRefetch()
    }
  },[words])

  const dateForRecordTime = new Date().toLocaleTimeString()
  // console.log(dateForRecordTime)

 useEffect(()=>{
  const completedWords = words?.find(word => parseInt(word?.day) === parseInt(user?.day)-1 &&  word?.completed)
  console.log(completedWords,dateForRecordTime)
  if(dateForRecordTime === "11:00:00 AM"){
    axios.put(`http://localhost:5000/dayCompleted?email=${email}`,).then(res =>{
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
          {words?.map((word) => 
           
          <div key={word?._id} className="day-content">
          {
              
              word?.time < user?.time && <button
               key={word?._id}
               className={`days-btn`}
               disabled={word?.completed}
               onClick={() => navigate(`/home/${word?.day}`)}
             >
               Day {word?.day} 
             </button>
             
             }
          </div>
         
          )}
        </div>
      </div>
    </div>
  );
};

export default Days;
