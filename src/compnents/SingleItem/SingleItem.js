import React from 'react';
import './SingleItem.css'

const SingleItem = ({item}) => {

    const {name, img, description, price, supplier} = item;



    return (
        <div className='single-item'>
              <img className='w-100 box-shadow' src={img} alt="" />
              <h3> {name}</h3>
              <p>Price: {price}</p>
              <p><small>{description}</small> </p>
              <h5>Supplier:{supplier}</h5>
          <button  className='btn btn-primary'>Manage Item</button>
        </div>
    );
};

export default SingleItem;