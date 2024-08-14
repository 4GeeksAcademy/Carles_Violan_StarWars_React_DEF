import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Favorites = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            {/* <h1 className="titleFavorites">Likes List</h1> */}
            <div className="row">
                {store.favorites.map((item, index) => (
                    <div className="col-sm-8" key={index}>                      
                        <h4 className="card-title">{item.name}</h4>  
                        <button onClick={() => actions.removeFavorite(item.name)} className="btn btn-danger">                                   
                            Remove Favorite
                        </button>                                                             
                    </div>
                ))} 
            </div>
        </div>
    );
};