import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import "./Days.css";


const Days = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const {data : words} = useQuery({
    queryKey : ["words"],
    queryFn : ()=>axios.get(`http://localhost:5000/words?email=${email}`).then(res => res.data).catch(err => console.log(err))
  })

  const date = JSON.parse(localStorage.getItem("user"))?.date;
  // console.log(date);

  return (
    <div className="body">
      <div className="days-container">
        <div>
          <h3>Puzzle Days</h3>
        </div>
        <div className="day-content">
          {words.map((word) => (
            <button
              key={word.id}
              className="days-btn"
              onClick={() => navigate(`/home/${word.day}`)}
            >
              Day {word.day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Days;
