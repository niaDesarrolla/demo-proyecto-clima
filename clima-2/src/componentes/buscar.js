import React, { useState } from 'react';
import WeatherApp from './watherapi';
import CardApi from './cardsapi';

const Buscar = () => {
  const [city, setCity] = useState('');
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleSearch = () => {
    // Lógica para realizar la búsqueda de la ciudad
  };
  return (
    <div className="weather-app">
      <div>
        <WeatherApp />
      </div>
      <input
        type="text"
        placeholder="Ingrese una ciudad"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
export default Buscar;