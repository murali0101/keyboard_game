import React, { useState } from "react";
import "./InputBox.css";
export const InputBox = ({ props }) => {
  const {
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
    statusToggle,
  } = props;
  function inputHandler(e) {
    console.log(count, "ccc");
    startTimer();
    if (e.key != letter && !status) {
      addSec(500);
      console.log(e.key);
    }

    if (count >= 20) {
      stopTimer();
      statusToggle();
    } else {
      getRandom();
      increaseCount();
    }
  }
  return (
    <div className="inputBox">
      <input
        type={"text"}
        onKeyUp={inputHandler}
        className="inputBox__input"
        placeholder="Type here"
        disabled={status ? true : false}
      />
      <button className="inputBox__buttom">Reset</button>
    </div>
  );
};
