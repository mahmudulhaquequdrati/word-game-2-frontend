import React from "react";
import { Link } from "react-router-dom";
import "./Test.css";

const Test = () => {
  return (
    <div className="xy">
      <div className="context">
        <div>
          <div>
            <h3>Pass Gas</h3>
            <p>Press Go to start the clock</p>
          </div>
        </div>
        <Link to="/word-match">
          <button>Go</button>
        </Link>
      </div>

      <div class="area">
        <ul class="circles">
          <li>A</li>
          <li>L</li>
          <li>Z</li>
          <li>E</li>
          <li></li>
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

export default Test;
