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
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours < 1) {
    hours = 12;
  } else {
    hours = hours;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  return (
    <div>
      {day} {hours}:{min}
    </div>
  );
}
