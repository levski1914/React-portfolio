import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home";
import Addrecipe from "./pages/Addrecipe";
import Recipe from "./pages/Recipe";
import Notfound from "./pages/Notfound";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addRecipe" element={<Addrecipe />} />
          <Route path="/editRecipe/:id" element={<Addrecipe />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Notfound />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
