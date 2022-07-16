import React, { useContext } from "react";
import { GameContext } from "../contextAPI";
import "./RandomAlphabetCard .css";
export const RandomAlphabetCard = () => {
  const { letter } = useContext(GameContext);
  return (
    <div className="randomAlphabetCard">
      <div className="randomAlphabetCard__alphabet">{letter}</div>
    </div>
  );
};
