import React, { useState } from 'react';
import arrow from '../assets/img/previous.png';

const Collapse = ({title, content}) => {

    const [isActive, setIsActive] = useState("false");
    
    const handleToggle = () =>{
        setIsActive(!isActive);
    }


    return (
        <div className='collapse'>
            <button className='collapse__title' onClick={handleToggle}>
                <span >{title}</span>
                <img src={arrow} alt='ouvrir' className={isActive? 'arrowRotate' : ""} />
            </button>
            <div className={`collapse__content ${isActive ? "" : 'active' }`} >
                {Array.isArray(content)? content.map((text, index) =>(
                    <p key={index}>{text}</p>)) : <p>{content}</p>
                }
                
            </div> 
        </div>
    );
};

export default Collapse;