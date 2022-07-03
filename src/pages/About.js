import React from 'react';
import Footer from '../components/Footer';
import myImage from '../assets/img/bannerApropos.png';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Collapse from '../components/Collapse';


const About = () => {
    return (
        <div>
            <Header />
            <div className='about'>
                <Banner test={""} image={myImage} />
                <div className='about__collapses'>
                    <Collapse title={'Fiabilité'} content={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
                    <Collapse title={'Respect'} content={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
                    <Collapse title={'Service'} content={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
                    <Collapse title={'Responsabilité'} content={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default About;