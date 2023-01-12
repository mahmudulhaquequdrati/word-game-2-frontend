import React, { useState } from "react";
import BtnComponent from "../stopwatch/btn-component/BtnComponent";
import Display from "../stopwatch/display/Display";
import "./WordMatch.css";
const WordMatch = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [text, setText] = useState("");
  console.log(text);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => start();

  //words for game
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

  function handleChange(event) {
    const texts = event.target.value;
    setText(texts);
  }

  return (
    <div className="box">
      <h1>Pass Gas</h1>
      <div>
        <p>Fishy name of former west village bar</p>
      </div>
      <div>
        <div className="word-box">
          {words.map((word) => (
            <input name="firstName" onChange={handleChange} />
          ))}
        </div>
      </div>

      <div className="time">
        <div className="main-section">
          <div className="clock-holder">
            <div className="stopwatch">
              <Display time={time} />
              <BtnComponent
                text={text}
                status={status}
                resume={resume}
                reset={reset}
                stop={stop}
                start={start}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordMatch;
