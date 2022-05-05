import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SingleItem from '../SingleItem/SingleItem';
import './Inventory.css'

const Inventory = () => {
    const {inventoryId} = useParams();
    const [laptops, setLaptops] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/laptops')
        .then(res => res.json())
        .then(data => setLaptops(data));
    }, [])







    return (
        <div className='container'>
            <h1>Inventory:{inventoryId} </h1>
            
           
            <div className="row">
            <div className="items-container">
                    {
                        laptops.map(item => <SingleItem
                        key={item._id}
                        item ={item}
                        ></SingleItem>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Inventory;