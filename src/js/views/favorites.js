import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Favorites = () => {
    const { store, actions } = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button 
                className="btn btn-primary dropdown-toggle" 
                type="button" 
                onClick={toggleDropdown}
            >
                Favorites ({store.favorites.length})
            </button>
            <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                {store.favorites.length > 0 ? (
                    store.favorites.map((item, index) => (
                        <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                            {item.name}
                            <button 
                                onClick={() => actions.removeFavorite(item.name)} 
                                className="btn btn-sm btn-danger">
                                x
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="dropdown-item">No Favorites</li>
                )}
            </ul>
        </div>
    );
};
