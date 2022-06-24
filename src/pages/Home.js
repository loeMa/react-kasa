import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <nav className='navigation__bar'>
                <Logo />
                <Navigation />
            </nav>
            <div>
                <h1>Accueil</h1>
            </div>
            
        </div>
    );
};

export default Home;