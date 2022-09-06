const API_KEY = "1dc852e261179e291a7aceeab5278cd3";

const constructIconUrl = (iconId) => {
  const url = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  return url;
};
const constructWeatherUrl = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((response) => response.json())
    .then((data) => data);
  const {
    weather,
    main: { feels_like, humidity, pressure, temp, temp_max, temp_min },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    icon: constructIconUrl(icon),
    temp,
    feels_like,
    humidity,
    pressure,
    temp_max,
    temp_min,
    speed,
    country,
    name,
  };
};

export { constructWeatherUrl };
