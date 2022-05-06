import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Mange.css'

const Manage = () => {
    const {id} = useParams();
    const [updateProduct, setUpdateProduct] = useState({});
    useEffect(() =>{
        const  url = `http://localhost:5000/laptops/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUpdateProduct(data))
        
    }, []);


    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
       const supplier =event.target.supplier.value;
       const price =event.target.price.value;
       const img =event.target.img.value;
       const description =event.target.description.value;
    
       const updatedUser ={name, supplier, price, img, description};
         console.log(updatedUser)
 
 //for update send data to server
        const url =`http://localhost:5000/laptops/${id}`;
     fetch(url, {
         method: 'PUT',
         headers:{
             'content-type': 'application/json'
         },
         body: JSON.stringify(updatedUser)
     })
     .then(res =>  res.json())
     .then(data =>{
         console.log('success', data);
         alert('One  product updated successfully, Thank you.');
         event.target.reset();
     })
 
    }




    

    return (
        
         
              <div className='w-50 mx-auto text-center'>
             <h1> Product Id:{updateProduct.name} </h1>
            <h2>Update item</h2>
            <form className='d-flex flex-column' onSubmit={handleUpdateUser} >
                <input className='mb-2' type="text"  name="img" placeholder='Product image url' />
                <input className='mb-2' type="text"  name="name" placeholder='Brand name' />
                <input className='mb-2' type="text"  name="price" placeholder='price' />
                <textarea className='mb-2' type="text"  name="description" placeholder='description' />
                <input className='mb-2' type="text"  name="supplier" placeholder='Supplier name' />
                <button className='btn btn-primary m-2' type="submit">update</button>
            </form>
        </div>
        
        
    );
};

export default Manage;