import { createContext, useState } from "react";
import { useCount, useRandomAlphabet, useTimer } from "../utils/utils";
export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [timer, addSec, startTimer, stopTimer, resetTimer] = useTimer(0);
  const [letter, getRandom] = useRandomAlphabet("A");
  const [count, increaseCount, resetCount] = useCount(1);
  const [status, setStatus] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [myBestTime, setMyBestTime] = useState(localStorage.getItem("mbt"));

  return (
    <GameContext.Provider
      value={{
        timer,
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
        setStatus,
        gameOver,
        setGameOver,
        myBestTime,
        setMyBestTime,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
