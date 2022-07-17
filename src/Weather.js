import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      temp: response.data.main.temp,
      ready: true,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      name: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coord: response.data.coord,
    });
  }
  function search() {
    const apiKey = "e3091b4145e6faee8eceb09d13bcc468";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function askLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(cityLocation);
  }
  function cityLocation(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    const apiKey = "e3091b4145e6faee8eceb09d13bcc468";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city here"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <input type="submit" value="" className="btn w-100" />
            </div>
            <div className="col-2">
              <input
                type="button"
                className="btn current-location"
                value=""
                onClick={askLocation}
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coord={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
