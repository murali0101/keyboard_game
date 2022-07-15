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
    setGameOver,
      gameOver,
      setStatus
  } = props;
  function inputHandler(e) {
    console.log(count, "ccc");
    startTimer();

    console.log(e.target.value);
    if (e.key != letter && !gameOver) {
      addSec(500);
      console.log(e.key);
    }

    if (count >= 20) {
      stopTimer();
      setGameOver(true);
    } else {
      getRandom();
      increaseCount();
    }
  }
  function resetHandler() {
    resetCount();
    stopTimer();
    resetTimer();
    setGameOver(false);
    setStatus(false)
    document.querySelector(".inputBox__input").value = "";
  }
  return (
    <div className="inputBox">
      <input
        type={"text"}
        onKeyUp={inputHandler}
        className="inputBox__input"
        placeholder="Type here"
        disabled={ gameOver ? true : false}
      />
      <button className="inputBox__buttom" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};
