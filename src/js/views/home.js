import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
export const Home = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
            <h1 className="titleCharacters" style={{ }}>Characters</h1>
                <div className="row">
                {store.personas.map((item, index) =>
                    <div className="col-sm-4" key={index}>
                                           
                        <div id="card" className="card" style={{ marginBottom: '15px' }}>
                            <img className="card-img-top" style={{ backgroundColor: 'lightgray', width: '100%', height: '200px' }} src={`https://starwars-visualguide.com/#/characters/#{index}`} alt="Card image"/>
                              <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">Gender: {item.gender}<br></br>Hair Color: {item.hair_color}<br></br>Eye-color: {item.eye_color}</p>
                      
                                <Link to={"/single/" + index}>
                                    <span href="#" className="btn btn-primary">Learn more!</span>
                                </Link>
                                <i className='far fa-heart'/>
                            </div>                          
                        </div>
                </div>
                  )}
                </div>

                <h1 className="titlePlanets" style={{ color: 'red' }}>Planets</h1>
                <div className="row">
                {store.planetas.map((item, index) =>
                    <div className="col-sm-4" key={index}>
                                           
                        <div id="card" className="card" style={{ marginBottom: '15px' }}>
                            <img className="card-img-top" style={{ backgroundColor: 'lightgray', width: '100%', height: '200px' }} src="{}" alt="Card image"/>
                              <div className="card-body">
                                <h4 className="card-title">{item.climate}</h4>
                                {<p className="card-text">Climate: {item.climate}<br></br>Created: {item.created}<br></br>Diameter: {item.diameter}</p>}
                      
                                <Link to={"/single2/" + index}>
                                    <span href="#" className="btn btn-primary">Learn more!</span>
                                </Link>
                            </div>                          
                        </div>
                </div>
                  )}
                </div>
                <h1 className="titleVehicles" style={{ color: 'red' }}>Vehicles</h1>
                <div className="row">
                {store.vehiculos.map((item, index) =>
                    <div className="col-sm-4" key={index}>
                                           
                        <div id="card" className="card" style={{ marginBottom: '15px' }}>
                            <img className="card-img-top" style={{ backgroundColor: 'lightgray', width: '100%', height: '200px' }} src="{}" alt="Card image"/>
                              <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                { <p className="card-text">Model: {item.model}<br></br>Vehicle_class: {item.vehicle_class}<br></br>Manufacturer: {item.manufacturer}</p> }
                              
                                <Link to={"/single3/" + index}>
                                    <span href="#" className="btn btn-primary">Learn more!</span>
                                </Link>
                            </div>                          
                        </div>
                </div>
                  )}
                </div>

            </div>
            
        </>
    )
}