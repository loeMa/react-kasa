import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({flat}) => {


    return (
        
        
            <li className='card'>
                <Link to={ `/accommodation/${flat.id}` }  >
                    <img src={flat.cover} alt={flat.title} />
                    <span></span>
                    <h2>{flat.title}</h2>
                </Link>
            </li>
        
        
    );
};

export default Card;