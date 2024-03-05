import React from "react";
import Calculator from "./Components/Calculator/Calculator";
import "./App.css";
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Calculator/>
    </>
  );
}

export default App;
