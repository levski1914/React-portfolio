import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import AboutView from "./component/AboutView";
import Search from "./component/Search";
import MovieView from "./component/MovieView";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <Search keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movies/:id" element={<MovieView />} />
      </Routes>
    </>
  );
}

export default App;
