import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemp">
        <span className="temp">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F |
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    let celsius = (props.fahrenheit - 32) * (5 / 9);
    return (
      <span className="WeatherTemp">
        <span className="temp">{Math.round(celsius)}</span>
        <span className="unit">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}
