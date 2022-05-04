import React, { useEffect, useState } from 'react';
import SingleItem from '../SingleItem/SingleItem';
import './TotalItem.css'


const TotalItem = () => {

    const [items,  setItems ] =useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/laptops')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <h1>total item :{items.length}</h1>
                <h1 className='items-title'>Our Total Items</h1>
                <div className="items-container">
                    {
                        items.map(item => <SingleItem
                        key={item._id}
                        item ={item}
                        ></SingleItem>)
                    }
                </div>
                
            </div>
                
            
            
        </div>
    );
};

export default TotalItem;
