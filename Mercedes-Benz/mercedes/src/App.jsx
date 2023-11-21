import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
