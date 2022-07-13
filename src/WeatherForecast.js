import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "e3091b4145e6faee8eceb09d13bcc468";
  let lon = props.coord.lon;
  let lat = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Wed</div>
          <WeatherIcon code="01d" size={36} />

          <div className="forecastTemp">
            <span className="tempMax">100°</span>
            <span className="tempMin">33°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
