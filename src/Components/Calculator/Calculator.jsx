import React, { useState } from "react";
import "./style.css";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";

// parent
const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [resultDisplayed, setResultDisplayed] = useState(false);

  // klik button
  const handleButtonClick = (value) => {
    if (resultDisplayed) {
      setDisplayValue(value);
      setResultDisplayed(false);
    } else {
      setDisplayValue((prevDisplayValue) => prevDisplayValue + value);
    }
  };

  // kalkulasi hasil
  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
      setResultDisplayed(true);
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  // reset display
  const clearDisplay = () => {
    setDisplayValue("");
    setResultDisplayed(false);
  };

  return (
    <div className="container">
      <CalculatorDisplay value={displayValue} />
      <CalculatorButtons
        handleButtonClick={handleButtonClick}
        clearDisplay={clearDisplay}
        calculateResult={calculateResult}
      />
    </div>
  );
};

export default Calculator;
