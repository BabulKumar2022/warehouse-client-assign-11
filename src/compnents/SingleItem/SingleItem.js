import './SingleItem.css'
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({item}) => {
    const [laptops, setLaptops] = useState([]);
    const {name, img, description, price, supplier, _id} = item;

// function for delete
    const handleUserDelete = id =>{
         const proceed = window.confirm('Are you sure, you want to deliver this product?');
         if(proceed){
            console.log('deleting one product', id);
            const url = `https://pacific-wildwood-26590.herokuapp.com/laptops/${id}`;
            fetch(url , {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
               if(data.deletedCount > 0){
                   console.log('deleted');
                const remaining = laptops.filter(item => item._id !==id);
                setLaptops(remaining);
               
               }
            })
         }
       

    }

    return (
        <div className='single-item'>
              <img className='w-100 box-shadow' id='image-size' src={img} alt="" />
              <h6> {name}</h6>
              <div className="inner-text">
                <p>Price: {price}</p>
                <p><small>{description}</small> </p>
              </div>
              <h6>Supplier:{supplier}</h6>
          <button  onClick={() => handleUserDelete(_id)} className='btn btn-danger m-2'>Deliver</button>
          <Link to={`/manage/${_id}`}><button className='btn btn-primary'>Update</button> </Link>
        </div>
    );
};

export default SingleItem;