import { useEffect, useState } from "react";
export function useTimer(initial) {
  const [timer, setTimer] = useState(initial || 0);
  const [onTimer, setOnTimer] = useState(false);
  useEffect(() => {
    let interval = null;
    if (onTimer) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [onTimer]);
  function addSec(value) {
    setTimer((prev) => prev + value);
  }
  function startTimer() {
    setOnTimer(true);
  }
  function stopTimer() {
    setOnTimer(false);
  }
  function resetTimer() {
    setTimer(0);
  }
  return [timer, addSec, startTimer, stopTimer, resetTimer];
}

export function useRandomAlphabet(initial) {
  const [letter, setLetter] = useState(initial || "A");

  function getRandom() {
    let alpha = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let result = alpha[Math.floor(Math.random() * (26 - 0) + 0)];
    setLetter(result);
  }

  return [letter, getRandom];
}

export function useCount(initial) {
  const [count, setCount] = useState(initial || 1);

  function increaseCount() {
    setCount((prev) => prev + 1);
  }
  function resetCount() {
    setCount(1);
  }
  return [count, increaseCount, resetCount];
}
