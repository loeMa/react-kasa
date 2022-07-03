import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Flat = () => {

    const [data, setData] = useState([]);
    const getData = () =>{
        axios.get("http://localhost:3004/logements").then((res) => setData(res.data))
    };

    useEffect(() => getData(), []);

    return (
        <div>
            <ul className='flat'>
                {data.map((flat) =>(
                    <Card key={flat.id} flat={flat} />
                ))}
            </ul>
        </div>
    );
};

export default Flat;