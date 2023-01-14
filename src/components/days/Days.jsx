import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Days.css";

const Days = () => {
  const navigate = useNavigate();
  const days = [
    {
      day: "1",
    },
    {
      day: "2",
    },
    {
      day: "3",
    },
    {
      day: "4",
    },
    {
      day: "5",
    },
    {
      day: "6",
    },
  ];
  return (
    <div className="body">
      <div className="days-container">
        <div>
          <h3>Puzzle Days</h3>
        </div>
        <div className="day-content">
          {" "}
          {days.map((day) => (
            <Link to="/">
              <button className="days-btn">Day {day.day}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Days;
