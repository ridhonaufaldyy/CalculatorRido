import React from "react";
import "./style.css";

const CalculatorDisplay = ({ value }) => {
  return (
    <div className="display">{value}</div>
  );
};

export default CalculatorDisplay;
