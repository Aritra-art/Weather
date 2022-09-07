import coldBg from "./assets/winter.jpg";
import hotBg from "./assets/sunny.jpg";
import Descriptions from "./components/Description.jsx";
import { useEffect, useState } from "react";
import { constructWeatherUrl } from "./WeatherServices";

function App() {
  const [city, setCity] = useState("Kanchrapara");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await constructWeatherUrl(city, units);
      setWeather(data);
      let threshold = 0;
      if (units === "metric") {
        threshold = 20;
      } else {
        threshold = 60;
      }
      if (data.temp <= threshold) {
        setBg(coldBg);
      } else {
        setBg(hotBg);
      }
    };

    fetchWeatherData();
  }, [units, city]);

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input
                type="text"
                name="city"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.target.blur();
                    setCity(e.target.value);
                  }
                }}
                placeholder="enter city name ..."
              />
              <button
                onClick={(e) => {
                  let button = e.target;
                  const currentUnit = e.target.textContent.slice(1);
                  const isCelsius = currentUnit === "C";
                  console.log(isCelsius);
                  button.textContent = isCelsius ? "°F" : "°C";
                  setUnits(isCelsius ? "metric" : "imperial");
                }}
              >
                °F
              </button>
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.icon} alt="weatherIcon" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed(0)} °${
                  units === "metric" ? "C" : "F"
                }`}</h1>
              </div>
            </div>
            {/* bottom description */}
            <Descriptions weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
