import React from 'react';
import Banner from '../components/Banner';
import Flats from '../components/Flats';
import Footer from '../components/Footer';
import desktopImage from '../assets/img/IMG.png';
import mobileImage from '../assets/img/IMGResponsive.png';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='main__home'>
                <Banner title={"Chez vous, partout et ailleurs"} desktopImage={desktopImage} mobileImage={mobileImage} height={""} />
                <Flats />
            </div>
            <Footer />
        </div>
        
    );
};

export default Home;