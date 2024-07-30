import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Favorites = () => {
    const { store, actions } = useContext(Context);


    return (
        <div className="container">
            <h1 className="titleFavorites">Likes List</h1>
            <div className="row">
                {store.favorites.map((item, index) => (
                    <div className="col-sm-8" key={index}>
                        
                                <h4 className="card-title">{item.name}
                                    X
                                </h4>

                    </div>
                    
                ))}
                 <button onClick={() => actions.removeFavorite()} className="btn btn-danger">
                                    
                                    Remove List
                                </button>
            </div>
        </div>
    );
};
