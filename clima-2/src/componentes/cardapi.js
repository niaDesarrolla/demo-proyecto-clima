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
    
    const {country, region, humidity, cloud, precip_mm, temp_c, feelslike_c} = cityData

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
                    {cityData.current.condition.text}
                    
                        <img 
                         
                         src={
                          temp_c.condition.icon >= 25 && cloud <= 25
                          ? './img/soleado.jpg'
                          : temp_c.icon >= 15 && 
                          temp_c.condition.icon <= 24 &&
                          cloud === 'alta'
                          ? './img/nublado.jpg'
                          : temp_c.icon.condition.icon >= 10 &&
                          precip_mm.consition.icon >= 10
                          ? './img/lluvioso.jpg'
                          :temp_c.condition.icon <= 0 &&
                          precip_mm.condition.icon >= 10
                          ? './img/nieve.jpg' 
                          : 'ruta-imagen-desconocida'
                        } 
                         alt="Weather Icon" 
                         className="img-fluid rounded-start"/> </p>

                    <img src={cielonubes} className="img-fluid rounded-start" alt="cielonubes" />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body text-start mt-2">
                      <p>País: {country}</p>
                      <p>Región: {region}</p>
                      <p>Temperatura: {temp_c}°C</p>
                      <p>Sensación Térmica:{feelslike_c}°</p>
                      <p>Humedad: {humidity}%</p>
                      <p>Nubosidad: {cloud}</p>
                      <p>Precipitación: {precip_mm}</p>
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