import React from 'react';
import Footer from '../components/Footer';
import myImage from '../assets/img/bannerApropos.png';
import Banner from '../components/Banner';
import Header from '../components/Header';


const About = () => {
    return (
        <div>
            <Header />
            <div className='about'>
                <Banner test={""} image={myImage} />
            </div>
            
            <Footer />
        </div>
    );
};

export default About;