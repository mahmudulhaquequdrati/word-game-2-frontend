import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>ok</h1>
      <div className="context">
        <h3>Pass Gas</h3>
        <p>Press Go to start the clock</p>
        <Link to="/word-match">
          <button>Go</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
