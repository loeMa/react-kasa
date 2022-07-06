import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({flat}) => {


    return (
        
        <Link to={ `/accommodation/${flat.id}` }  >
            <li className='card'>
                <img src={flat.cover} alt={flat.title} />
                <span></span>
                <h2>{flat.title}</h2>
            </li>
        </Link>
        
    );
};

export default Card;