import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let tempMax = Math.round(props.data.temp.max);
    return `${tempMax}°`;
  }
  function minTemp() {
    let tempMin = Math.round(props.data.temp.min);
    return `${tempMin}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="forecastTemp">
        <span className="tempMax">{maxTemp()}</span>
        <span className="tempMin">{minTemp()}</span>
      </div>
    </div>
  );
}
