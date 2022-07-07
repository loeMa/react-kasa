import React from 'react';

const Banner = ({title, desktopImage, mobileImage, height}) => {

    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

    const style = {
        backgroundImage: `url(${imageUrl})`,
        height: `${height}` ,
    }

    return (
        <div className='banner'  style={style}>
            <span></span>
            <h1>{title}</h1>
        </div>
    );
};

export default Banner;