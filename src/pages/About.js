import React from 'react';
import Footer from '../components/Footer';
import desktopImage from '../assets/img/bannerApropos.png';
import mobileImage from '../assets/img/backgroundResponsive.png';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Collapse from '../components/Collapse';


const About = () => {

    return (
        <div>
            <Header />
            <div className='about'>
                <Banner title={""} desktopImage={desktopImage} mobileImage={mobileImage} height={'223px'} />
                <div className='about__collapses'>
                    <Collapse title={'Fiabilité'} content={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}/>
                    <Collapse title={'Respect'} content={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
                    <Collapse title={'Service'} content={'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'}/>
                    <Collapse title={'Responsabilité'} content={'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'}/>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;