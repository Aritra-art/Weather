import coldBg from "./assets/winter.jpg";
import hotBg from "./assets/sunny.jpg";
import Descriptions from "./components/Description.jsx";
import { useEffect, useState } from "react";
import { constructWeatherUrl } from "./WeatherServices";

function App() {
  const [weather, setWeather] = useState("loading");
  const [units, setUnits] = useState("imperial");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await constructWeatherUrl("Kanchrapara", units);
      setWeather(data);
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="app" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="enter city name ..." />
            <button>°F</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src={weather.icon} alt="weatherIcon" />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>{`${weather.temp && weather.temp.toFixed(0)} °${
                units === "metric" ? "C" : "F"
              }`}</h1>
            </div>
          </div>
          {/* bottom description */}
          <Descriptions />
        </div>
      </div>
    </div>
  );
}

export default App;
