import React from "react";

export default function Date(props) {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let day = days[props.day.getDay()];

  console.log(day);

  return <div className="ForecastDay">{day}</div>;
}
