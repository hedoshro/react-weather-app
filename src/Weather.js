import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "./SetDateAndTime";
import "./WeatherInfo";
import "./SetDateAndTime";
import WeatherInfo from "./WeatherInfo";
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
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
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
            className="form-inline d-flex justify-content-around"
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
        <WeatherInfo info={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
