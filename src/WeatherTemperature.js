import { useState } from "react";

function WeatherTemperature(props) {
  const [temp, setTemp] = useState(props.dataTemp);

  function handelCelcius(event) {
    event.preventDefault();
    setTemp(Math.round(props.dataTemp));
  }
  function handleFahrenheit(event) {
    event.preventDefault();
    setTemp(Math.round((props.dataTemp * 9) / 5 + 32));
  }
  if (temp === props.dataTemp) {
    return (
      <div className="WeatherTemperature">
        <h2>
          <span className="currentTemp">{temp}</span>{" "}
          <span className="bothUnits">
            °C |
            <a href="/" onClick={handleFahrenheit}>
              °F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h2>
          <span className="currentTemp">{temp}</span>{" "}
          <span className="bothUnits">
            <a href="/" onClick={handelCelcius}>
              °C
            </a>
            | °F
          </span>
        </h2>
      </div>
    );
  }
}

export default WeatherTemperature;
