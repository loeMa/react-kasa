import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
    return (
        <nav className='navigation__bar'>
            <Logo logoImage={'logo__header'} />
            <Navigation />
        </nav>
    );
};

export default Header;