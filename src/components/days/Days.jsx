import React from "react";
import "./Days.css";

const Days = () => {
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
            <button className="days-btn">Day {day.day}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Days;
