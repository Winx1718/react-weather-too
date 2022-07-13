import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
