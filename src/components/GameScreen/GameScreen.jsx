import React, { useContext } from "react";
import { GameContext } from "../contextAPI";
import { InputBox } from "../InputBox/InputBox";
import { RandomAlphabetCard } from "../RandomAlphabetCard/RandomAlphabetCard ";
import { ResultCard } from "../ResultCard/ResultCard";
import { Timer } from "../Timer/Timer";
import "./GameScreen.css";

export const GameScreen = () => {
  const { myBestTime, gameOver } = useContext(GameContext);
  return (
    <div className="gameScreen">
      <div className="gameScreen__heading__ls center">Type The Alphabet</div>

      <div className="gameScreen__heading__ms center">
        Typing game to see how fast you type. Timer starts when you do :)
      </div>

      {gameOver ? <ResultCard /> : <RandomAlphabetCard />}

      <Timer />

      <div className="gameScreen__heading__ss center">
        my best time: {myBestTime != undefined ? myBestTime : "let's play game"}
        s!
      </div>

      <InputBox />
    </div>
  );
};
