import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import WeatherComp from "./components/weather.comp";
import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const API = "823fda755acd09ca98a338ea93ca8b38";
//call url= api.openweathermap.org/data/2.5/weather?q=London,uk
function App() {
  const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState("Varna");
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    isClickde();
  }, []);

  function isClickde() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID=6b56cebfd066b49b811b41a7f6d042dd&units=metric`
    )
      .then((res) => {
        if (res.ok) {
          console.log(res.status);
          return res.json();
        } else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error!(wrong location)");
          }
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
      })
      .then((object) => {
        setWeather(object);
        console.log(weather);
      })
      .catch((error) => console.log(error));
    fetch(
      `https://api.unsplash.com/search/photos?query=${locations}&client_id=IXccbzm27CZeMY7dqgEH5R4maPx3Dr5vzs1pB2-TdVY`
    )
      .then((res) => {
        if (res.ok) {
          console.log(res.status);
          return res.json();
        } else {
          throw new Error("You made a mistake");
        }
      })
      .then((data) => {
        console.log(data);
        setPhotos(data?.results[0]?.urls?.raw);
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="app">
        <div className="wrapper">
          <div className="search">
            <input
              type="text"
              value={locations}
              onChange={(e) => setLocations(e.target.value)}
              placeholder="Enter location"
              className="location_input"
            />
            <button className="location_searcher" onClick={isClickde}>
              Search Location
            </button>
          </div>
          <div className="app_data">
            <p className="temp">
              Current temperature:
              <span className="temperature">{weather?.main?.temp}&#8451;</span>
            </p>
          </div>
          <img src={photos} className="app__image" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
