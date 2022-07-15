import React, { useEffect, useState } from "react";
import "./Timer.css";
export const Timer = ({ props }) => {
  const { timer, gameOver, myBestTime, setMyBestTime, status, setStatus } =
    props;
  if (gameOver) {
    setTimeout(cb, 3);
  }
  function cb() {
    let result = document.querySelector(".timer").innerHTML;
    result = +result.split(" ")[1].split("s")[0];
    console.log(myBestTime);
    if (myBestTime > result) {
      localStorage.setItem("mbt", result);
      setMyBestTime(result);
      setStatus(true)
    }
    if (!myBestTime) {
      localStorage.setItem("mbt", result);
      setMyBestTime(result);
      setStatus(true)
    }
  }
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
