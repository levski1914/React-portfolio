import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CalculatorWrapper from "./Components/CalculatorWrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CalculatorWrapper />
    </>
  );
}

export default App;
