import React, { useContext } from "react";
import { useCount, useRandomAlphabet, useTimer } from "../../utils/utils";
import { GameContext } from "../contextAPI";
import { InputBox } from "../InputBox/InputBox";
import { RandomAlphabetCard } from "../RandomAlphabetCard/RandomAlphabetCard ";
import { ResultCard } from "../ResultCard/ResultCard";
import { Timer } from "../Timer/Timer";
import "./GameScreen.css";
export const GameScreen = () => {
  const [timer, addSec, startTimer, stopTimer, resetTimer] = useTimer(0);
  const [letter, getRandom] = useRandomAlphabet("A");
  const [count, increaseCount, resetCount] = useCount(1);
  const { status, statusToggle } = useContext(GameContext);
  return (
    <div className="gameScreen">
      <div className="gameScreen__heading__ls center">Type The Alphabet</div>
      <div className="gameScreen__heading__ms center">
        Typing game to see how fast you type. Timer starts when you do :)
      </div>

      {status ? <ResultCard  /> : <RandomAlphabetCard letter={letter} />}

      <Timer timer={timer} />

      <div className="gameScreen__heading__ss center">my best time: 1.39s!</div>
      <InputBox
        props={{
          addSec,
          startTimer,
          stopTimer,
          resetTimer,
          letter,
          getRandom,
          count,
          increaseCount,
          resetCount,
          status,
          statusToggle,
        }}
      />
    </div>
  );
};
