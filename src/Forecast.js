import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data.daily);
    setWeatherData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row justify-content-center">
          <div className="col ">
            <div className="Forecast-day">
              <ForecastDay day={new Date(weatherData[1].dt * 1000)} />
            </div>
            <WeatherIcon
              data={weatherData[1].weather[0].icon}
              size={35}
              alt={props.data.description}
            />
            <div className="Forecast-temps">
              <strong>{Math.round(weatherData[1].temp.max)}°</strong>
              {Math.round(weatherData[1].temp.min)}°
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "37642a13027260b53c58ca345c4dc4db";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
