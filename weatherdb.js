// WeatherDashboard.js
import React, { useState, useEffect } from 'react';
import WeatherInfo from './weatherinfo';
import Error from './error';
import './WeatherDashboard.css';

const API_KEY = 'YOUR_API_KEY';

function WeatherDashboard({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
          setError(null);
        } else {
          setError('City not found');
        }
      } catch (error) {
        setError('Failed to fetch weather data');
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return (
    <div className="weather-dashboard">
      {error && <Error message={error} />}
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
}

export default weatherdb;
