import { createContext, useState } from "react";
export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [status, setStatus] = useState(false);
  function statusToggle() {
    setStatus((p) => !p);
  }
  return (
    <GameContext.Provider value={{ status, statusToggle }}>
      {children}
    </GameContext.Provider>
  );
};
