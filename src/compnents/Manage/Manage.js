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
        const email =event.target.email.value;
     
        const updatedUser ={name, email};
         console.log(updatedUser)
 
 //for update send data to server
        const url =`http://localhost:5000/laptops/${id}`;
     fetch(url,{
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
            <form  onSubmit={handleUpdateUser} >
                <input type="text"  name="name" placeholder='Brand name' required/>
                <br />
                <input type="text"  name="email" placeholder='email name' required/>
                <br />
                <button className='btn btn-primary m-2' type="submit">Update +/-</button>
               
            </form>
            
        </div>
        
        
    );
};

export default Manage;