import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import "./Description.css";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
const Descriptions = (props) => {
  const tempUnit = props.units === "metric" ? "°C" : "°F";
  const windUnit = props.units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: props.weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: props.weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: props.weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: props.weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: props.weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: props.weather.speed.toFixed(),
      unit: windUnit,
    },
  ];

  return (
    <div className="section section__descriptions">
      {cards.map((cardElement) => {
        return (
          <div key={cardElement.id} className="card">
            <div className="description__card-icon">
              {cardElement.icon}
              <small>{cardElement.title}</small>
            </div>
            <h2>{`${cardElement.data} ${cardElement.unit}`}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Descriptions;
