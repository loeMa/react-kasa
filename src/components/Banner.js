import React from 'react';

const Banner = ({test, image}) => {
    return (
        <div className='banner'>
            
            <img src={image} alt="paysage" />
            <h1>{test}</h1>
        </div>
    );
};

export default Banner;