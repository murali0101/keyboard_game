import React from "react";
import "./ResultCard.css";
export const ResultCard = ({ props }) => {
  const { status } = props;
  return (
    <div className="resultCard">
      <div className={`resultCard__status ${status ? "green" : "red"}`}>
        {status ? "success!" : "failure"}
      </div>
    </div>
  );
};
