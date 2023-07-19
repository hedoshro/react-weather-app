import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
  const [city, setCity] = useState("Tehran");

  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }
  function search() {
    const apiKey = "a49f0cad903e09dc8e1t8o40aab88ab3";

    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="weatherApp">
        <nav className="navbar navbar  d-flex justify-content-left">
          <form
            className="form-inline d-flex justify-content-around 
        "
            onSubmit={handleSubmit}
          >
            <input
              className="form-control m-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleCityChange}
            />
            <button className="m-2  submitBotton" type="submit">
              Search
            </button>
          </form>
        </nav>

        <p>
          Results for <span className="city">{weatherData.city}</span>
        </p>
        <div className="row">
          <div className="col-6 d-flex space-between">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="img-fluid"
            />

            <h2>
              <span className="currentTemp">{weatherData.temp}</span>{" "}
              <span className="bothUnits">
                <a href="/">°C</a> |<a href="/">°F</a>
              </span>
            </h2>

            <ul className="weatherDetails">
              <li>description</li>
              <li>Humidity: 10%</li>
              <li>Wind: 8 km/h</li>
            </ul>
          </div>
          <div className="col-6 ">
            <ul className="dateAndTime">
              <li>
                <h2>Weather</h2>
              </li>
              <li>
                <div>Monday 10:00</div>
              </li>
              <li>
                <div>Mostly sunny</div>
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    handleSubmit("Tehran");
    return "Loading...";
  }
}
