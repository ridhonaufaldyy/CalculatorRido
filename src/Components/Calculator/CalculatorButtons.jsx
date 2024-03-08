import React from "react";
import { LIST_BUTTONS } from './Calculator.constant'

import "./style.css";


const CalculatorButtons = ({ handleButtonClick, clearDisplay, calculateResult }) => {

  return (
    <div className="buttons">
      {LIST_BUTTONS.map((item) => (
        <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
      ))}
      <button onClick={calculateResult}>=</button>
      <button onClick={clearDisplay}>C</button>
    </div>
  );
};

export default CalculatorButtons;
