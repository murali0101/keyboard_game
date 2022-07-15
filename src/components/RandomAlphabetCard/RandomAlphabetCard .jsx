import React from "react";
import "./RandomAlphabetCard .css";
export const RandomAlphabetCard = ({ letter }) => {
  return (
    <div className="randomAlphabetCard">
      <div className="randomAlphabetCard__alphabet">{letter}</div>
    </div>
  );
};
