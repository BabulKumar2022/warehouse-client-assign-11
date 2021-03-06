import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);

useEffect(()=>{
    fetch('https://pacific-wildwood-26590.herokuapp.com/laptops')
    .then(res => res.json())
    .then(data => setServices(data))
},[])
 

    return (
        <div id="services" className='container'>
            <div className="row">
             <h1 className='services-title'>ITEMS</h1>
                <div className="services-container">
                    {
                        services.slice(0,6).map(service => <Service
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