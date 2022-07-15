import React from "react";
import "./InputBox.css";
export const InputBox = () => {
  return (
    <div className="inputBox">
      <input type={"text"} className="inputBox__input" placeholder="Type here"/>
      <button className="inputBox__buttom">Reset</button>
    </div>
  );
};
