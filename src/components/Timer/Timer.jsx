import React, { useEffect, useState } from "react";
import "./Timer.css";
export const Timer = ({ timer }) => {
  return (
    <>
      <div className="timer">{`Time: ${time(timer)}s`}</div>
    </>
  );
};

function time(timer) {
  let result = (timer / 1000).toFixed(3);
  return result;
}
