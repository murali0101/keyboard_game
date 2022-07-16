import React, { useContext } from "react";
import { GameContext } from "../contextAPI";
import "./ResultCard.css";
export const ResultCard = () => {
  const { status } = useContext(GameContext);

  return (
    <div className="resultCard">
      <div className={`resultCard__status ${status ? "green" : "red"}`}>
        {status ? "success!" : "failure"}
      </div>
    </div>
  );
};
