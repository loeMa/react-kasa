import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <nav className='navigation__bar'>
                <Logo />
                <Navigation />
            </nav>
            <h1>A propos</h1>
        </div>
    );
};

export default About;