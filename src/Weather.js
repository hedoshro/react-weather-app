import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="weatherApp">
      <nav className="navbar navbar  d-flex justify-content-left">
        <form
          className="form-inline d-flex justify-content-around 
        "
        >
          <input
            className="form-control m-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="m-2  submitBotton" type="submit">
            Search
          </button>
        </form>
      </nav>

      <p>
        Results for <span className="city">Tehran, Tehran Province, Iran</span>
      </p>
      <div className="row">
        <div className="col-6 d-flex space-between">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly sunny"
            className="img-fluid"
          />

          <h2>
            <span className="currentTemp">34</span>{" "}
            <span className="bothUnits">
              <a href="/">°C</a> |<a href="/">°F</a>
            </span>
          </h2>

          <ul className="weatherDetails">
            <li>Precipitation: 0%</li>
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
}
