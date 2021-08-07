import React from "react";

export default function ConvertFahrenheit(props) {
  return (
    <div className="ConvertFahrenheit">
      <span className="current">{Math.round(props.celsius)}</span>
      <span className="celsius">°C</span>
    </div>
  );
}
