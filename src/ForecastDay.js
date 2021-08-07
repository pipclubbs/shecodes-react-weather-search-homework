import React from "react";

export default function Date(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let day = days[props.day.getDay()];

  return <div className="ForecastDay">{day}</div>;
}
