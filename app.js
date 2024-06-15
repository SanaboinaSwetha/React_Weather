// App.js
import React, { useState } from 'react';
import WeatherDashboard from './WeatherDashboard';
import './App.css';

function App() {
  const [city, setCity] = useState('');

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => handleCityChange(e.target.value)}
      />
      <WeatherDashboard city={city} />
    </div>
  );
}

export default App;
