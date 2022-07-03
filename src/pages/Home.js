import React from 'react';
import Banner from '../components/Banner';
import Flats from '../components/Flats';
import Footer from '../components/Footer';
import myImage from '../assets/img/IMG.png'
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='main__home'>
                
                <Banner test={"Chez vous, partout et ailleurs"} image={myImage} />
                <Flats />
            </div>
                <Footer />
            </div>
        
    );
};

export default Home;