import React, { useState, useEffect } from 'react';
import CardApi from './cardsapi';

const WeatherApp = () => {
  const apiKey = 'f70f771f8fd64f27822214051231305';
  const urlWeather = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
  const urlCity = '&aqi=no';

  const [city, setCity] = useState('');
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    getLocation(city);
  };

  const getLocation = async (loc) => {
    setLoading(true);
    const apiUrl = urlWeather + loc + urlCity;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      const weatherData = await response.json();
      console.log(weatherData);
      const cityData = {
        name: weatherData.location.name,
        country: weatherData.location.country,
        region: weatherData.location.region,
        temp_c: weatherData.current.temp_c,
        humidity: weatherData.current.humidity,
        condition: weatherData.current.condition.tex,
        icon: weatherData.current.condition.icon,
        localtime: weatherData.location.localtime,
      };
      setCityData(cityData);
      setLoading(false);
      setShow(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setShow(false);
    }
  };

  return (
    <div>
      <input type="text" value={city} onChange={handleCityChange} />
      <button onClick={handleSearch}>Buscar</button>

      {show && <CardApi cityData={cityData} loadingData={loading} showData={show} />}
    </div>
  );
};

export default WeatherApp;


