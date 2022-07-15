import React from "react";
import { useTimer } from "../../utils/utils";
import { InputBox } from "../InputBox/InputBox";
import { RandomAlphabetCard } from "../RandomAlphabetCard/RandomAlphabetCard ";
import { ResultCard } from "../ResultCard/ResultCard";
import { Timer } from "../Timer/Timer";
import "./GameScreen.css";
export const GameScreen = () => {
  const [timer, addSec, startTimer, stopTimer, resetTimer] = useTimer();
  return (
    <div className="gameScreen">
      <div className="gameScreen__heading__ls center">Type The Alphabet</div>
      <div className="gameScreen__heading__ms center">
        Typing game to see how fast you type. Timer starts whwn you do :)
      </div>
      {/* <ResultCard /> */}
      <RandomAlphabetCard />
      <Timer timer={timer}/>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={resetTimer}>rest</button>
      <button onClick={() => addSec(0.5)}>add</button>
      <div className="gameScreen__heading__ss center">my best time: 1.39s!</div>
      <InputBox props={{addSec, startTimer, stopTimer, resetTimer}} />
    </div>
  );
};
