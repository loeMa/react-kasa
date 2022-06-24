import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <nav className='navigation__bar'>
                <Logo />
                <Navigation />
            </nav>
            <div className='main'>
                <div className='main__text'>
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandes n'existe pas.</h2>
                </div>
                
                <NavLink to="/">
                    <p>Retournez sur la page d'accueil</p>
                </NavLink>
            </div>
            
        </div>
    );
};

export default Error;