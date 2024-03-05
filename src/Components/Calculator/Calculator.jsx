import React, { useState } from "react";
import "./style.css";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");

  const handleButtonClick = (value) => {
    setDisplayValue((prevDisplayValue) => prevDisplayValue + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const clearDisplay = () => {
    setDisplayValue("");
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
