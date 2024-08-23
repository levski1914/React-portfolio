import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Admin from "./pages/Admin";
import Home from "./pages/Teacher/Home";
import AddStudent from "./pages/AddStudent";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Teacher" element={<Home />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/editstudent/:id" element={<AddStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
