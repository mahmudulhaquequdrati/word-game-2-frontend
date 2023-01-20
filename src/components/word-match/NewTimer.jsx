import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = useState(true);
  const [timeLog, setTimeLog] = useState([]);

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

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    setIsRunning(false);
  };

  const handleSave = () => {
    let currentTime = `${time.hours.toString().padStart(2, "0")} : ${time.minutes.toString().padStart(2, "0")} : ${time.seconds.toString().padStart(2, "0")}`;
    setTimeLog([...timeLog, currentTime]);
  }

  return (
    <div>
      <h4>
        {time.hours.toString().padStart(2, "0")} : {time.minutes.toString().padStart(2, "0")} : {time.seconds.toString().padStart(2, "0")}
      </h4>

      {isRunning ? <button onClick={handleStop}>Stop</button> :<button onClick={handleStart}>Start</button>}
      { isRunning ? <button onClick={handleReset}>Reset</button> :null}
      <button onClick={handleSave}>Save Time</button>

      <div>
        <h4>Time Log: {timeLog[0]}</h4>
        <ul>
          {timeLog.map((log, index) => <li key={index}>{log}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Stopwatch;
