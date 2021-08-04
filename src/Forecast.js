import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(new Date(response.data.list[1].dt * 1000));

    setWeatherData({
      ready: true,
      icon: response.data.list[1].weather[0].icon,
      highTemp: response.data.list[1].main.temp_max,
      lowTemp: response.data.list[1].main.temp_min,
      day: new Date(response.data.list[1].dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Forecast">
        <div className="row justify-content-center">
          <div className="col ">
            <div className="Forecast-day">
              <ForecastDay day={weatherData.day} />
            </div>
            <WeatherIcon
              data={weatherData.icon}
              size={35}
              alt={props.data.description}
            />
            <div className="Forecast-temps">
              <strong>{Math.round(weatherData.highTemp)}°</strong>
              {Math.round(weatherData.lowTemp)}°
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "a4e6c35b5c3b1332cec44f1b012a008c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.data.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
