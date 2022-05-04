import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {

    const {id, name, img, description, price, supplier} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='single-service '>
          <img className='w-100' src={img} alt="" />
            <h3 className='text-info'> {name}</h3>
            <p>Price: {price}</p>
            <p>Details:<small>{description}</small> </p>
            <h6>Supplier: {supplier}</h6>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Manage:{name}</button>
        </div>
    );
};

export default Service; 