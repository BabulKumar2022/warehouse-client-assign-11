import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SingleItem from '../SingleItem/SingleItem';
import './Inventory.css'

const Inventory = () => {
    const {inventoryId} = useParams();
    const [laptops, setLaptops] = useState([]);
    

    useEffect(() =>{
        fetch('https://pacific-wildwood-26590.herokuapp.com/laptops')
        .then(res => res.json())
        .then(data => setLaptops(data));
    }, [])

 

    return (
        <div className='container'>
            <h3 className='text-center text-primary'>Remain Product:{laptops.length} </h3>
            <h3 className='text-center text-danger'>Delivered:{(laptops.length) - ((laptops.length)+10)}</h3>
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