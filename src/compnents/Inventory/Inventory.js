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
            <h1 className='text-center text-danger'>Total Product:{laptops.length} </h1>
            <h1 className='text-center text-danger'>delivered:{(laptops.length) - ((24)+1)}</h1>
            <div className="row">
            <div className="items-container my-5">
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