import React from "react";
import "./style.css";
const CalculatorDisplay = ({ value }) => {
  return (
    <div className="display">
      <input type="text" value={value} readOnly />
    </div>
  );
};

export default CalculatorDisplay;
