import React, { useState } from "react";
import "./style.css";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [resultDisplayed, setResultDisplayed] = useState(false);

  const handleButtonClick = (value) => {
    if (resultDisplayed) {
      setDisplayValue(value);
      setResultDisplayed(false);
    } else {
      setDisplayValue((prevDisplayValue) => prevDisplayValue + value);
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
      setResultDisplayed(true);
    } catch (error) {
      setDisplayValue("Error");
    }
  };

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
