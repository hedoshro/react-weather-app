function SetDateAndTime(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.time.getDay()];
  let hour = props.time.getHours();
  let minutes = props.time.getMinutes();
  let seconds = props.time.getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return (
    <div>
      {" "}
      {day}, {hour}:{minutes}:{seconds}
    </div>
  );
}

export default SetDateAndTime;
