import React from 'react';
import '../hojas-de-estilo/CardApi.css';
import Spinner from './spinner';
import cielonubes from '../img/cielonubes.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const CardApi = ({ cityData, loadingData, showData, }) => {  //esto es un destructuring para acceder a las propiedades de mi objeto
   
    if (loadingData) {
        return <Spinner />;
    }
    
    return (
        <div className="mt-5">
          {showData === true && (
            <div className="container">
              <div className="card mb-3 mx-auto bg-dark text-light">
                <div className="row g-0">
                  <div className="col-md-4">
                    <h3 className='card-title'>{cityData.name}</h3>
                    <p className='card-date'>Hora local: {cityData.localtime}</p>
                    <h2 className='card-temp'>{cityData.temp_c}°C</h2>

                    <p classNAme='card-icon'>
                    {cityData.condition.text}
                        <img 
                         
                         src={
                          cityData.temp_c >= 25 && cityData.nubosidad === 'baja'
                          ? './img/soleado.jpg'
                          : cityData.temp_c.icon >= 15 && 
                          cityData.temp_c <= 24 &&
                          cityData.nubosidad === 'alta'
                          ? './img/nublado.jpg'
                          :  cityData.temp_c.icon >= 10 &&
                          cityData.precipitacion.icon === "alta"
                          ? './img/lluvioso.jpg'
                          : cityData.temp_c.icon <= 0 &&
                          cityData.precipitacion.icon === "alta"
                          ? './img/nieve.jpg' 
                          : 'ruta-imagen-desconocida'
                        } 
                         alt="Weather Icon" 
                         className="img-fluid rounded-start"/> </p>

                    <img src={cielonubes} className="img-fluid rounded-start" alt="cielonubes" />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body text-start mt-2">
                      <p>País: {cityData.country}</p>
                      <p>Región: {cityData.region}</p>
                      <p>Temperatura: {cityData.temperatura}°%</p>
                      <p>Sensación Térmica: {cityData.sensacionTérmica}°%</p>
                      <p>Humedad: {cityData.humidity}%</p>
                      <p>Nubosidad: {cityData.Nubosidad}%</p>
                      <p>Precipitación: {cityData.Precipitacion}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ); (
        <h2 className='text-light'>sin datos</h2>
      )
    };
    
    export default CardApi;