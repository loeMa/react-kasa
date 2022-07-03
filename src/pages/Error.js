import React from 'react';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';

const Error = () => {
    return (
        <div>
            <Header />
            <div className='main'>
                <div className='main__text'>
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandes n'existe pas.</h2>
                </div>
                
                <NavLink to="/">
                    <p>Retournez sur la page d'accueil</p>
                </NavLink>
            </div>
            <Footer />
        </div>
    );
};

export default Error;