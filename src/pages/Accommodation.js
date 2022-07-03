import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import Slider from '../components/Slider';
import Host from '../components/Host';
import Loader from '../components/Loader'; 
import Tag from '../components/Tag';
import Header from '../components/Header';
import Collapse from '../components/Collapse';


const Accommodation = () => {

    const {id} = useParams();
    const [data, setData] = useState({});
    const [user, setUser] = useState({});
    const [tags, setTags] = useState([]);
    const [pictures, setPictures] = useState([]);
    const [isLoading, setIsLoading] = useState(false) 

    useEffect(() => {
        setIsLoading(true)
        const getData = async() =>{
         
        await fetch(`http://localhost:3004/logements`)
            .then((response) => response.json() )
            .then((value) => {
                const logement = value.find((logement) => logement.id === id )
                setUser(logement.host)
                setTags(logement.tags)
                setPictures(logement.pictures)
                setData(logement)
                setIsLoading(false)
            })
            .catch((error) => console.log(error))
            
        }
    getData()
}, [id])

    
/* console.log(data.host)  */
    
    /* const getData = () =>{
        axios.get("http://localhost:3004/logements").then((res) => {
            const datas = res.data;
            const dataSelected = datas.filter(selected => selected.id === id)
            
            setData(dataSelected[0])
        })
    }
    useEffect(() => getData(), []); */

    console.log(pictures)  
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
            </div>
            
                <Host data={user} />
                
            
            </div>
            <ul>
                {tags.map((tag, index) =>(
                    <Tag key={index} tag={tag} />
                ))
                } 
                
            </ul>
            <Collapse />
            </div>
            )}  
            <Footer />
        </div>
        
    );
};

export default Accommodation;