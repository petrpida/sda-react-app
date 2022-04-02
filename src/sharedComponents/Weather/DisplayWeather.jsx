import React from "react";

export default function DisplayWeather({ data }) {
  console.log(data);
  return (
    <div>
      <div className="overall">
        <h6>
          {data.name}, {data.sys.country}
        </h6>
        <p className="text-muted">as of {new Date().toLocaleTimeString()}</p>
        <div>
          <h1>{Math.round(data.main.temp - 273.15) + " °C"}</h1>
        </div>
        <div>
          <h6>{data.weather[0].description}</h6>
        </div>
      </div>
      <div className="more row">
          <div className="left col text-start">
            <h6>High/Low <div>{Math.round(data.main.temp_min - 273.15) + "/" + Math.round(data.main.temp_max - 273.15) + " °C"}</div></h6>
            <h6>Humidity <div>{data.main.humidity} %</div></h6>
            <h6>Pressure <div>{data.main.pressure} hPa</div></h6>
            <h6>Visibility <div>{data.visibility} m</div></h6>
          </div>
          <div className="right col text-start">
            <h6>Wind <div>{data.wind.speed} m/s</div></h6>
            <h6>Wind Direction <div>{data.wind.deg}°</div></h6>
            <h6>Sunrise <div>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</div></h6>
            <h6>Sunset <div>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</div></h6>
          </div>
        </div>
    </div>
  );
}
