import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "a4e6c35b5c3b1332cec44f1b012a008c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function newCity(event) {
    setCity(event.target.value);
  }

  function getWeatherData(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <form onSubmit={handleSubmit} onClick={handleSubmit}>
            <div className="row">
              <div className="col-10 w-60 p-0">
                <input
                  className="form-control search-input"
                  input="text"
                  placeholder="Enter a city..."
                  onChange={newCity}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
