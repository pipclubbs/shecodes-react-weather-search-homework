import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

export default function App() {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
    setReady(true);

    if (ready) {
      return (
        <div className="App">
          <div className="container">
            <div className="row">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-10 w-60 p-0">
                    <input
                      className="form-control search-input"
                      input="text"
                      placeholder="Enter a city..."
                      onChange={updateCity}
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
                  <h1>{city}</h1>
                </div>
                <div className="row">
                  <ul className="local-info">
                    <div className="row">
                      <li>Thursday, 17:50</li>
                      <li className="text-capitalize">
                        {weatherData.description}
                      </li>
                      <li>Humidity: {weatherData.temperature}%</li>
                      <li>Wind: {weatherData.wind}km/h</li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="col-5 current">
                <img src={weatherData.icon} alt={weatherData.description} />
                <span>{weatherData.temperature}</span>
                <span className="celsius">°C</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      let apiKey = "a4e6c35b5c3b1332cec44f1b012a008c";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);

      return "loading...";
    }
  }
}
