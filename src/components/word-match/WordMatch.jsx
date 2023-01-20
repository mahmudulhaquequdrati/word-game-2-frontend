import React, { useEffect, useState } from "react";
import Output from "./Output";
import "./WordMatch.css";

const words = ["BAR"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const WordMatch = () => {
//  -----------stop wacht code stard-------- //
const [time, setTime] = useState({
  hours: 0,
  minutes: 0,
  seconds: 0,
});
const [isRunning, setIsRunning] = useState(true);
useEffect(() => {
  let intervalId = null;
  if (isRunning) {
    intervalId = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
  } else if (!isRunning && time !== 0) {
    clearInterval(intervalId);
  }
  return () => clearInterval(intervalId);
}, [isRunning, time]);


const  handleSave = () => {
  let currentTime = `${time.hours.toString().padStart(2, "0")} : ${time.minutes.toString().padStart(2, "0")} : ${time.seconds.toString().padStart(2, "0")}`;
  return currentTime;
}
// ---------------- stop wacht code end----------\\


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
  }, [correctLetters, wrongLetters]);

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
            handleSavetime={handleSave}
          />
        </div>
      </div>

      {/*-------------------------- StopWatch Section---------------------------- */}
      <div>
        <h4>
          {time.hours.toString().padStart(2, "0")} : {time.minutes.toString().padStart(2, "0")} : {time.seconds.toString().padStart(2, "0")}
        </h4>
      </div>
    </div>
  );
};

export default WordMatch;
