import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="body">
      <div className="home-container">
        <h3>Pass Gas</h3>
        <p>Press Go to start the clock</p>
        <Link>
          <button>Go</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
