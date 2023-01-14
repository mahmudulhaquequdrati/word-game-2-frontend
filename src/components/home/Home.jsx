import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="top-conatiner">
      <div className="context">
        <div>
          <div>
            <h3>Pass Gas</h3>
            <p>Press Go to start the clock</p>
          </div>
        </div>
        <Link to="/word-match">
          <button>Start</button>
        </Link>
      </div>

      <div class="area">
        <ul class="circles">
          <li>A</li>
          <li>L</li>
          <li>Z</li>
          <li>E</li>
          <li>P</li>
          <li>F</li>
          <li>O</li>
          <li>W</li>
          <li></li>
          <li>X</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
