import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            
                    <h1 className="titleCharacters">Characters</h1>
                    <div class="d-flex flex-row flex-nowrap overflow-auto">
                        {store.personas.map((item, index) => (
                            <div className="col-sm-4" key={index}>
                                <div id="card" className="card" style={{ marginBottom: '15px', padding: '20px' }}>
                                    <img 
                                        className="card-img-top" 
                                        style={{ backgroundColor: 'lightgray', width: '100%' }} 
                                        src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} 
                                        alt="Card image"
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">{item.name}</h4>
                                        <p className="card-text">
                                            Gender: {item.gender}<br />
                                            Hair Color: {item.hair_color}<br />
                                            Eye-color: {item.eye_color}
                                        </p>
                                        <Link to={`/single/${index}`}>
                                            <span className="btn btn-primary">Learn more!</span>
                                        </Link>
                                        <button onClick={() => actions.addFavorite(item)} className="btn">
                                        <span><i className='far fa-heart'/></span>
                                        </button>
                                        {/* <button onClick={() => actions.addFavorite({ ...item, id: `character-${index}` })} className="btn"></button> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                   
            </div>

            <h1 className="titlePlanets" style={{ color: 'red' }}>Planets</h1>
            <div class="d-flex flex-row flex-nowrap overflow-auto">
                {store.planetas.map((item, index) => (
                    <div className="col-sm-4" key={index}>
                        <div id="card" className="card" style={{ marginBottom: '15px', padding: '20px' }}>
                            <img 
                                className="card-img-top" 
                                style={{ backgroundColor: 'lightgray', width: '100%' }} 
                                src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`} 
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">
                                    Climate: {item.climate}<br />
                                    Created: {item.created}<br />
                                    Diameter: {item.diameter}
                                </p>
                                <Link to={`/single2/${index}`}>
                                    <span className="btn btn-primary">Learn more!</span>
                                </Link>
                                <button onClick={() => actions.addFavorite(item)} className="btn">
                                <span><i className='far fa-heart'/></span>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className="titleVehicles" style={{ color: 'red' }}>Vehicles</h1>
            <div class="d-flex flex-row flex-nowrap overflow-auto">
                {store.vehiculos.map((item, index) => (
                    <div className="col-sm-4" key={index}>
                       <div id="card" className="card" style={{ marginBottom: '15px', padding: '20px' }}>
                            <img 
                                className="card-img-top" 
                                style={{ backgroundColor: 'lightgray', width: '100%'}} 
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`} 
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">
                                    Model: {item.model}<br />
                                    Vehicle class: {item.vehicle_class}<br />
                                    Manufacturer: {item.manufacturer}
                                </p>
                                <Link to={`/single3/${index}`}>
                                    <span className="btn btn-primary">Learn more!</span>
                                </Link>
                                <button onClick={() => actions.addFavorite(item)} className="btn">
                                <span><i className='far fa-heart'/></span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
