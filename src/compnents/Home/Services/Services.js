import React, { useEffect, useState } from 'react';
import Inventory from '../../Inventory/Inventory';
import Service from '../Service/Service';
import './Services.css'









const Services = () => {
    const [services, setServices] = useState([]);

useEffect(()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
},[])
 


    return (
        <div id="services" className='container'>
            <div className="row">
             <h1 className='services-title'>MY ITEMS</h1>
                <div className="services-container">
                    {
                        services.slice(0,3).map(service => <Service
                        key={service.id}
                        service={service}
                        ></Service>)
                    }
                </div>
            </div>
            
            
        </div>
    );
};

export default Services;