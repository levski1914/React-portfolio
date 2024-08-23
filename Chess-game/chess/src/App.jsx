import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Chess game</h2>
    </>
  );
}

export default App;
