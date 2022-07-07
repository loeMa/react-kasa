import React from 'react';
import myLogo from '../assets/img/logo.svg';

const Logo = ({logoImage}) => {
    return (
        <div className='logo'>
            <img src={myLogo} alt='logo Kasa' className={logoImage} />
        </div>
    );
};

export default Logo;