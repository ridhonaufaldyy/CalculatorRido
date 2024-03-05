import React from "react";
import "./style.css";
const CalculatorButtons = ({ handleButtonClick, clearDisplay, calculateResult }) => {
  return (
    <div className="buttons">
      <button onClick={clearDisplay}>C</button>
      <button onClick={() => handleButtonClick("7")}>7</button>
      <button onClick={() => handleButtonClick("8")}>8</button>
      <button onClick={() => handleButtonClick("9")}>9</button>
      <button onClick={() => handleButtonClick("/")}>/</button>
      <button onClick={() => handleButtonClick("4")}>4</button>
      <button onClick={() => handleButtonClick("5")}>5</button>
      <button onClick={() => handleButtonClick("6")}>6</button>
      <button onClick={() => handleButtonClick("*")}>*</button>
      <button onClick={() => handleButtonClick("1")}>1</button>
      <button onClick={() => handleButtonClick("2")}>2</button>
      <button onClick={() => handleButtonClick("3")}>3</button>
      <button onClick={() => handleButtonClick("-")}>-</button>
      <button onClick={() => handleButtonClick("0")}>0</button>
      <button onClick={() => handleButtonClick(".")}>.</button>
      <button onClick={calculateResult}>=</button>
      <button onClick={() => handleButtonClick("+")}>+</button>
    </div>
  );
};

export default CalculatorButtons;
