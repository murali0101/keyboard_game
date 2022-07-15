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
  const {
    status,
    setStatus,
    myBestTime,
    setMyBestTime,
    gameOver,
    setGameOver,
  } = useContext(GameContext);
  return (
    <div className="gameScreen">
      <div className="gameScreen__heading__ls center">Type The Alphabet</div>
      <div className="gameScreen__heading__ms center">
        Typing game to see how fast you type. Timer starts when you do :)
      </div>

      {gameOver ? (
        <ResultCard props={{ status }} />
      ) : (
        <RandomAlphabetCard letter={letter} />
      )}

      <Timer
        props={{
          timer,
          gameOver,
          myBestTime,
          setMyBestTime,
          status,
          setStatus,
        }}
      />

      <div className="gameScreen__heading__ss center">
        my best time: {myBestTime != undefined ? myBestTime : "let's play game"}
        s!
      </div>
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
          gameOver,
          setGameOver,
          setStatus,
          setMyBestTime,
        }}
      />
    </div>
  );
};
