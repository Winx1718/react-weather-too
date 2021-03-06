import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.name}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} size={64} />
          <WeatherTemp fahrenheit={props.data.temp} />
        </div>
        <div className="col-6">
          <ul>
            <li>
              <span className="glyph"></span> {props.data.humidity}%
            </li>
            <li>
              <span className="glyph"></span> {Math.round(props.data.wind)}{" "}
              mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
