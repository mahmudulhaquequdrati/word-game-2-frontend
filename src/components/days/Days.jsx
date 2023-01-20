import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Days.css";

const Days = () => {

  const mainDate = '20';
  const navigate = useNavigate();
  const [date, setDate] = useState(1);
  const increment = () => {
    setDate((data) => data + 1)
  }
  return (
    <div className="body">
      <div className="days-container">
        <div>
          <h3>Puzzle Days</h3>
        </div>
        <div className="day-content">
          {" "}
            <Link to="/home">
              {Array.from({ length: date}).map(
                (_,i) => (
                  <button className="days-btn">Day {i+1}</button>
                )
              )}
            </Link>       
        </div>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Days;
