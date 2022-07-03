import React, { useState } from 'react';
import star from '../assets/img/star.svg'

const Rating = ({filled, etoiles}) => {

    console.log(filled)

    return (
        <div>
            <img src={star} className=
            {filled ? "starfill" : ""} 
            alt={etoiles + "étoiles"} />
    
        </div>
    );
};

export default Rating;