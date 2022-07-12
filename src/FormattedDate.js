import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let min = props.date.getMinutes();
  let time = `${hours}:${min}`;
  if (hours < 1) {
    time = `${hours + 12}:${min} AM`;
  } else {
    if (hours > 12) {
      time = `${hours - 12}:${min} PM`;
    } else {
      time = `${props.date.getHours()}:${min} AM`;
    }
  }
  if (min < 10) {
    min = `0${min}`;
  }
  return (
    <div>
      {day} {time}
    </div>
  );
}
