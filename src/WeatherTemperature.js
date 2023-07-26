import { useState } from "react";

function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function handelCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function handleFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h2>
          <span className="currentTemp">{props.dataTemp}</span>{" "}
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
          <span className="currentTemp">
            {Math.round((props.dataTemp * 9) / 5 + 32)}
          </span>{" "}
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
