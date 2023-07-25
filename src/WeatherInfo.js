import "./SetDateAndTime";
import SetDateAndTime from "./SetDateAndTime";
import "./WeatherIcon";
import WeatherIcon from "./WeatherIcon";
import "./WeatherTemperature";
import WeatherTemperature from "./WeatherTemperature";

function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <p className="m-3">
        Results for <span className="city">{props.info.city}</span>
      </p>
      <div className="row">
        <div className="col-6 d-flex space-between">
          <WeatherIcon dataIcon={props.info.icon} size={42} />

          <WeatherTemperature dataTemp={props.info.temp} />

          <ul className="weatherDetails">
            <li>description: {props.info.description}</li>
            <li>Humidity: {props.info.humidity} %</li>
            <li>Wind: {props.info.wind} km/h</li>
          </ul>
        </div>
        <div className="col-6 ">
          <ul className="dateAndTime">
            <li>
              <h2>Weather</h2>
            </li>
            <li>
              <div>
                <SetDateAndTime time={props.info.date} />
              </div>
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

export default WeatherInfo;
