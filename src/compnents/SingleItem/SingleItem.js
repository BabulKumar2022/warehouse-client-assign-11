import './SingleItem.css'
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({item}) => {
    const [laptops, setLaptops] = useState([]);
    const {name, img, description, price, supplier, _id} = item;

// function for delete
    const handleUserDelete = id =>{
         const proceed = window.confirm('Are you sure, you want to delete this product?');
         if(proceed){
            console.log('deleting one product', id);
            const url = `http://localhost:5000/laptops/${id}`;
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
              <img className='w-100 box-shadow' src={img} alt="" />
              <h3> {name}</h3>
              <p>Price: {price}</p>
              <p><small>{description}</small> </p>
              <h5>Supplier:{supplier}</h5>
          <button  onClick={() => handleUserDelete(_id)} className='btn btn-danger m-2'>Deliver</button>
          <Link to={`/manage/${_id}`}><button className='btn btn-primary'>Update</button> </Link>
        </div>
    );
};

export default SingleItem;