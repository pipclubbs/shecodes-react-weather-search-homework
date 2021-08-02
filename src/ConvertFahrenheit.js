import React, { useState } from "react";

export default function ConvertFahrenheit(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="ConvertFahrenheit">
        <span className="current">{Math.round(props.celsius)}</span>
        <span className="celsius">
          <span>
            °C {""} | {""}
          </span>
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="ConvertFahrenheit">
        <span className="current">{Math.round(fahrenheit)}</span>
        <span className="celsius">
          <span>
            °F {""} | {""}
          </span>
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  }
}
