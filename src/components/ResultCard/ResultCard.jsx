import React from "react";
import "./ResultCard.css";
export const ResultCard = () => {
  return (
    <div className="resultCard">
      <div className={`resultCard__status ${true ? "green" : "red"}`}>
        {true ? "success!" : "failure"}
      </div>
    </div>
  );
};
