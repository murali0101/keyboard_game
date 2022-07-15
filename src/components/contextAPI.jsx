import { createContext, useState } from "react";
export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [status, setStatus] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [myBestTime, setMyBestTime] = useState(localStorage.getItem("mbt"));

  return (
    <GameContext.Provider
      value={{
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
