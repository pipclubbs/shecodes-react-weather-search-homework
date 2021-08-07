import React from "react";
import "./CelsiusTemperature.css";

export default function CelsiusTemperature(props) {
  return (
    <div className="CelsiusTemperature">
      <span className="CelsiusTemperature-current">
        {Math.round(props.celsius)}
      </span>
      <span className="CelsiusTemperature-celsius">°C</span>
    </div>
  );
}
