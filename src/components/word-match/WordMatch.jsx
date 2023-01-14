import React, { useEffect, useState } from "react";
import BtnComponent from "../stopwatch/btn-component/BtnComponent";
import Display from "../stopwatch/display/Display";
import Output from "./Output";

import "./WordMatch.css";

const words = ["BAR"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const WordMatch = () => {
  //*!Stpowatch Function
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

  //*!Game Word Match Function
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toUpperCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            alert("ok");
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <div className="box">
      <h1>Pass Gas</h1>
      <div>
        <p>Fishy name of former west village bar</p>
      </div>

      {/*-------------------------- Word Match Box Section ------------------------- */}
      <div>
        {" "}
        <div className="word">
          {selectedWord.split("").map((letter, i) => {
            return (
              <span className="letter" key={i}>
                {correctLetters.includes(letter) ? letter : ""}
              </span>
            );
          })}
        </div>
        {/*------------------- Show Output & Redirect to Result Page ---------------- */}
        <div>
          <Output
            correctLetters={correctLetters}
            wrongLetters={wrongLetters}
            selectedWord={selectedWord}
            setPlayable={setPlayable}
            playAgain={playAgain}
          />
        </div>
      </div>

      {/*-------------------------- StopWatch Section---------------------------- */}
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
