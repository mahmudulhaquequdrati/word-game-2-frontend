import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Days.css";

const words = [
  {
    id: 1,
    word: "BAR",
    day: 1,
    completed: false,
    time: 24,
  },
  {
    id: 2,
    word: "MOON",
    day: 2,
    completed: false,
    time: 48,
  },
  {
    id: 3,
    word: "SUN",
    day: 3,
    completed: false,
    time: 72,
  },
];

const Days = () => {
  const navigate = useNavigate();

  const date = JSON.parse(localStorage.getItem("user"))?.date;
  console.log(date);

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
