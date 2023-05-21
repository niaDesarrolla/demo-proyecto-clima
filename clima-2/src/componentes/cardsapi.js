import React from 'react';
import '../hojas-de-estilo/CardApi.css';
import Spinner from './spinner';
import cielonubes from '../img/cielonubes.jpg';


const CardApi = ({ cityData, loadingData, showData }) => {
   
    if (loadingData) {
        return <Spinner />;
    }

    if(showData){
        
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
                        <img src={cityData.condition.icon} alt="Weather Icon" className="img-fluid rounded-start"/> </p>
                    <img src={cielonubes} className="img-fluid rounded-start" alt="cielonubes" />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body text-start mt-2">
                      <p>País: {cityData.country}</p>
                      <p>Región: {cityData.region}</p>
                      
                      <p>Humedad: {cityData.humidity}%</p>
                      
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