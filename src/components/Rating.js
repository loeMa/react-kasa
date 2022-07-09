import React from 'react';
import star from '../assets/img/star.svg'

const Rating = ({filled, etoiles}) => {



    return (
        
            <img src={star} className=
            {filled ? "starfill" : "starEmpty"} 
            alt={etoiles + "étoiles"} />
        
    );
};

export default Rating;