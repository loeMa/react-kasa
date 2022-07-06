import React from 'react';

const Banner = ({test, desktopImage, mobileImage, height}) => {

    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
console.log(window.innerWidth)
console.log(imageUrl)
    const style = {
        backgroundImage: `url(${imageUrl})`,
        height: `${height}` ,
    }

    return (
        <div className='banner'  style={style}>
            <span></span>
            {/* <img src={image} alt="paysage" /> */}
            <h1>{test}</h1>
        </div>
    );
};

export default Banner;