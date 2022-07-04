import React from 'react';
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={({isActive}) => isActive ? "nav-active" : ""}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "nav-active" : ""}>
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;