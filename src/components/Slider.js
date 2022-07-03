import React, { useEffect, useState } from 'react';
import arrowRight from '../assets/img/next.png';
import arrowLeft from '../assets/img/previous.png'

const Slider = ({data}) => {

    const [indexImg, setIndexImg] = useState(0);
        
    useEffect(() =>{
        const lastIndex = data.length - 1;

        if(indexImg < 0){
            setIndexImg(lastIndex);
        }
        if(indexImg > lastIndex){
            setIndexImg(0)
        }
        
    }, [indexImg, data])

    return (
        <li className='sliders'>
            {data.length > 1 ? <span  className='previous' onClick={() => setIndexImg(indexImg - 1)} ><img src={arrowLeft} alt='previous' /></span> : null } 
            {data.length > 1 ? <span  className='next' onClick={() => setIndexImg(indexImg + 1)}><img src={arrowRight} alt='next' /></span> : null } 
            <img className='sliders__img' src={data[indexImg]} alt="logement" /> 
            <p>{indexImg + 1}/{data.length}</p>
        </li>
    );
};

export default Slider;