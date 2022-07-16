import React, { useContext, useState } from "react";
import { GameContext } from "../contextAPI";
import "./InputBox.css";
export const InputBox = () => {
  const [last, setLast] = useState({
    inputValue: "",
  });
  const {
    setStatus,
    gameOver,
    setGameOver,
    addSec,
    startTimer,
    stopTimer,
    resetTimer,
    letter,
    getRandom,
    count,
    increaseCount,
    resetCount,
  } = useContext(GameContext);

  function inputHandler(e) {
    // console.log(count, "ccc");
    startTimer();
    const { name, value } = e.target;
    setLast({ ...last, [name]: value });
    // console.log(e.target.value);
    if (e.key != letter && !gameOver) {
      addSec(500);
      // console.log(e.key);
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
    setStatus(false);
    setLast({ inputValue: "" });
  }
  return (
    <div className="inputBox">
      <input
        value={last.inputValue}
        name={"inputValue"}
        type={"text"}
        onChange={inputHandler}
        className="inputBox__input"
        placeholder="Type here"
        disabled={gameOver ? true : false}
      />
      <button className="inputBox__buttom" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};
