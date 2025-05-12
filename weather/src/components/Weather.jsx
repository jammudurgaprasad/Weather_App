import React, { useState } from 'react'
import '../css/Weather.css'
import blank from '../assets/blank.png'

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const icons = weatherData
    ? `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`
    : blank;

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      search(city);
    }
    setCity("");
  }

  const search = async (cityName) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== 200) {
        console.error("City not found:", data.message);
        return;
      }

      setWeatherData({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: data.weather[0].icon,
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }


  return (
    <div className='weather-box'>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Search' onChange={handleChange} value={city} />
          <button type="submit" className="search-btn">
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
      </div>

      <div className='img-container'>
        <img src={icons} alt='weather' />
      </div>

      {weatherData && (
        <div className='weather-info'>
          <div className='weather-main'>
            <span>{weatherData.temperature}°C</span>
            <span>{weatherData.location}</span>
          </div>
          <div className='weather-stat-group'>
            <div className='weather-stat'>
              <span className="material-symbols-outlined">humidity_percentage</span>
            </div>
            <h4>{weatherData.humidity}%</h4>
            <p>Humidity</p>
          </div>
          <div className='weather-stat-group'>
            <div className='weather-stat'>
              <span className="material-symbols-outlined">airwave</span>
            </div>
            <h4>{weatherData.windspeed} Km/h</h4>
            <p>Wind Speed</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
