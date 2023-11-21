import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Lottery } from "./components/Lottery";

function App() {
  return (
    <>
      <div className="App">
        <Lottery title="Lotto 5/35" maxNum={35} numBalls={5} />
        <Lottery title="Lotto 6/49" maxNum={49} numBalls={6} />
      </div>
    </>
  );
}

export default App;
