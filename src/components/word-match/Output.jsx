import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkWin } from "./helpers";

const Output = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  handleSavetime,
}) => {
  const navigate = useNavigate();
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    const savetime = handleSavetime();
    navigate("/result", { state: savetime });
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Unfortunately you lost. 😕";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  return (
    <div>
      <div
        className="popup-container"
        style={finalMessage !== "" ? { display: "flex" } : {}}
      >
        <div className="popup">
          <h2>{finalMessage}</h2>
          <h3>{finalMessageRevealWord}</h3>
        </div>
      </div>
    </div>
  );
};

export default Output;
