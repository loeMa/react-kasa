import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <Logo logoImage={'logo__footer'} />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;