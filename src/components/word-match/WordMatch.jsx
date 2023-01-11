import React from "react";
import "./WordMatch.css";
const WordMatch = () => {
  const words = [
    {
      word: "B",
    },
    {
      word: "A",
    },
    {
      word: "R",
    },
  ];
  return (
    <div className="box">
      <h1>Pass Gas</h1>
      <div>
        <p>Fishy name of former west village bar</p>
      </div>
      <div className="word-box">
        {words.map((word) => (
          <>
            <input type="text" name="" id="" />
          </>
        ))}
      </div>
      <div className="time">00:02:44</div>
    </div>
  );
};

export default WordMatch;
