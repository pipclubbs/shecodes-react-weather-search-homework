import React from "react";
import WeatherIcon from "./WeatherIcon";
import Date from "./Date";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7">
          <div className="row">
            <h1>{props.data.city}</h1>
          </div>
          <div className="row">
            <ul className="local-info">
              <div className="row">
                <li>
                  <Date date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind}km/h</li>
              </div>
            </ul>
          </div>
        </div>
        <div className="col-5 icon-temp">
          <div className="row">
            <div className="col-5">
              <WeatherIcon
                data={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <div className="col-7">
              <span className="current">
                {Math.round(props.data.temperature)}
              </span>
              <span className="celsius">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
