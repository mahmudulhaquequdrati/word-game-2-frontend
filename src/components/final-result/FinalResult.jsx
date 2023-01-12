import React, { useState } from "react";
import BtnComponent from "../stopwatch/btn-component/BtnComponent";
import Display from "../stopwatch/display/Display";
import "./FinalResult.css";

const FinalResult = () => {
  return (
    <div className="result-container">
      <div>
        <h3>Pass Gas</h3>
      </div>
      <div>
        <h1>BOOM</h1>
      </div>
      <div className="details-box">
        <div>
          <p>completed</p>
          <p>22</p>
        </div>
        <div>
          <p>Total time</p>
        </div>
      </div>
    </div>
  );
};

export default FinalResult;
