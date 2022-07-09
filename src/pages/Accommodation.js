import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import Slider from '../components/Slider';
import Host from '../components/Host';
import Loader from '../components/Loader'; 
import Tag from '../components/Tag';
import Header from '../components/Header';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';


const Accommodation = () => {

    const {id} = useParams();
    const [data, setData] = useState({});
    const [user, setUser] = useState({});
    const [tags, setTags] = useState([]);
    const [equipments, setEquipments] = useState([]);
    const [pictures, setPictures] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [stars, setStars] = useState(0)

    useEffect(() => {
        setIsLoading(true)
        const getData = async() =>{
        
        await fetch(`http://localhost:3004/logements`)
            .then((response) => response.json() )
            .then((value) => {
                const logement = value.find((logement) => logement.id === id )
                setUser(logement.host)
                setTags(logement.tags)
                setEquipments(logement.equipments)
                setPictures(logement.pictures)
                setData(logement)
                setIsLoading(false)
                setStars(logement.rating)
            })
            .catch((error) => console.log(error))
            
        }
    getData()
}, [id])



    return (
        <div>
            <Header />
            {isLoading ? (
                <Loader />
            ) : ( 
            <div className='accommodation'>
                
                    <Slider  data={pictures} />
            
            <div className='accommodation__presentation'>
            <div>
                <h1>{data.title}</h1>
                <p>{data.location}</p>
                <ul>
                    {tags.map((tag, index) =>(
                        <Tag key={index} tag={tag} />
                    ))
                    } 
                
                </ul>
            </div>
            <div className='accommodation__presentation__second'>
                <Host data={user} />
                
                <span className='rating'>
                {[1, 2, 3, 4, 5].map((value) =>(
                    <Rating 
                    key={value} 
                    filled={value <= stars} 
                    etoiles={stars} />
                    ))
                
                    }
                </span>
            </div>
                
            
            </div>
            
            <div className='accommodation__collapses'>
                <div className='accommodation__collapses--description'>
                    <Collapse title={'Description'} content={data.description} />
                </div>
                <div className='accommodation__collapses--equipements'>
                    <Collapse title={'Equipements'} content={equipments} />
                </div>
            </div>
            </div>
            )}  
            <Footer />
        </div>
        
    );
};

export default Accommodation;