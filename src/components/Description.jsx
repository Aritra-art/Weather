import { FaArrowDown } from "react-icons/fa";
import "./Description.css";
import { useEffect } from "react";
import { constructWeatherUrl } from "../WeatherServices";
const Descriptions = () => {
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await constructWeatherUrl("Kanchrapara");
      console.log(data);
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="section section__descriptions">
      <div className="card">
        <div className="description__card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="card">
        <div className="description__card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="card">
        <div className="description__card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="card">
        <div className="description__card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="card">
        <div className="description__card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="card">
        <div className="description__card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
    </div>
  );
};

export default Descriptions;
