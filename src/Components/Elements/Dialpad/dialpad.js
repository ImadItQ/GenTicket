import React, { useState, useEffect } from "react";
import Holder from "../TicketHolder/holder";
import "./styles.css";
function dialpad(props) {
  const [nextValue, setNextValue] = useState("0");
  const [actVal, setActval] = useState("0");

  const handleNum = (number) => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
    setActval(nextValue.substring(0, 6));
  };

  const handleClick = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    }
  };
  const clearData = () => {
    setActval("0");
  };
  return (
    <div className="dial-container">
      <input
        className="input-field"
        type="number"
        value={actVal}
        placeholder="Enter 6 Digits"
        maxLength="6"
      />
      <div className="number-container">
        <div className="row">
          <div className="number" onClick={() => handleClick(7)}>
            7
          </div>
          <div className="number" onClick={() => handleClick(8)}>
            8
          </div>
          <div className="number" onClick={() => handleClick(9)}>
            9
          </div>
        </div>
        <div className="row">
          <div className="number" onClick={() => handleClick(4)}>
            4
          </div>
          <div className="number" onClick={() => handleClick(5)}>
            5
          </div>
          <div className="number" onClick={() => handleClick(6)}>
            6
          </div>
        </div>
        <div className="row">
          <div className="number" onClick={() => handleClick(1)}>
            1
          </div>
          <div className="number" onClick={() => handleClick(2)}>
            2
          </div>
          <div className="number" onClick={() => handleClick(3)}>
            3
          </div>
        </div>
        <div className="row">
          <div
            className="number"
            style={{
              paddingTop: 30,
              paddingBottom: 30,
              paddingLeft: 50,
              paddingRight: 56,
            }}
            onClick={clearData}
          >
            <i
              class="fas fa-backspace"
              style={{ color: "#5F5F5F", fontSize: 20 }}
            ></i>
          </div>
          <div className="number">0</div>
          <div
            className="number"
            style={{
              paddingTop: 30,
              paddingBottom: 30,
              paddingLeft: 50,
              paddingRight: 65,
            }}
            onClick={clearData}
          >
            <i
              class="far fa-trash-alt"
              style={{ color: "red", fontSize: 20 }}
            ></i>
          </div>
        </div>
        <Holder onClick={() => props.onClick(actVal)} />
      </div>
    </div>
  );
}

export default dialpad;
