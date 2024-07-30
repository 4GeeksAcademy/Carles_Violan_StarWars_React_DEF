import React from "react";
import { Link } from "react-router-dom";
import logoSW from "../../img/logoSW.png";
import { Favorites } from "../views/favorites";


export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Home</span>
            </Link>
           <p> <Favorites /></p>
            <div className="ml-auto">
                <Link to="/favorites">
                    <button className="btn btn-primary">Read Later</button>
                </Link>
            </div>
        </nav>
    );
};
