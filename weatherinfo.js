// WeatherInfo.js
import React from 'react';
import './WeatherInfo.css';

function WeatherInfo({ data }) {
  const { name, main, wind, weather } = data;

  return (
    <div className="weather-info">
      <h2>{name}</h2>
      <div>Temperature: {main.temp}°C</div>
      <div>Humidity: {main.humidity}%</div>
      <div>Wind Speed: {wind.speed} m/s</div>
      <div>Weather: {weather[0].main}</div>
    </div>
  );
}

export default Weatherinfo;
