import { useEffect, useState } from "react";
export function useTimer() {
  const [timer, setTimer] = useState(0);
  const [onTimer, setOnTimer] = useState(false);
  useEffect(() => {
    let interval = null;
    if (onTimer) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
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
