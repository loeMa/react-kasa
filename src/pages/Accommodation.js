import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Accommodation = () => {
    return (
        <div>
            <nav className='navigation__bar'>
                <Logo />
                <Navigation />
            </nav>
            <h1>Fiche logement</h1>
        </div>
    );
};

export default Accommodation;