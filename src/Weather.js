import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function getWeatherData(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <form>
            <div className="row">
              <div className="col-10 w-60 p-0">
                <input
                  className="form-control search-input"
                  input="text"
                  placeholder="Enter a city..."
                ></input>
              </div>
              <div className="col-2 p-0">
                <input
                  className="btn search-button"
                  type="button"
                  value="Search"
                ></input>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col-7">
            <div className="row">
              <h1>{weatherData.city}</h1>
            </div>
            <div className="row">
              <ul className="local-info">
                <div className="row">
                  <li>Thursday, 17:50</li>
                  <li className="text-capitalize">{weatherData.description}</li>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind}km/h</li>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-5 current">
            <img src={weatherData.icon} alt={weatherData.description} />
            <span>{Math.round(weatherData.temperature)}</span>
            <span className="celsius">°C</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a4e6c35b5c3b1332cec44f1b012a008c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeatherData);

    return "loading...";
  }
}
