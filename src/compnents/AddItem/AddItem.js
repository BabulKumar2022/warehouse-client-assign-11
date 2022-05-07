import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleItem from '../SingleItem/SingleItem';
import './AddItem.css'


const AddItem = () => {
    const {inventoryId} = useParams();
    const [laptops, setLaptops] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/laptops')
        .then(res => res.json())
        .then(data => setLaptops(data));
    }, [])

 
   const handleAddUser = event =>{
       event.preventDefault();
       const name = event.target.name.value;
       const supplier =event.target.supplier.value;
       const price =event.target.price.value;
       const img =event.target.img.value;
       const description =event.target.description.value;
    
       const user ={name, supplier, price, img, description};
        console.log(user)

// send data to server

    fetch('http://localhost:5000/user',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res =>  res.json())
    .then(data =>{
        console.log('success', data);
        alert('One new product added successfully, Thank you.');
        event.target.reset();
    })

   }


    return (
        <div className="add-my-item-container container">
            <div className='w-50 mx-auto text-center'>
                <h2>Add new item</h2>
                <form className='d-flex flex-column' onSubmit={handleAddUser} >
                    <input className='mb-2' type="text"  name="img" placeholder='Product image url' required/>
            
                    <input className='mb-2' type="text"  name="name" placeholder='Brand name' required/>
            
                    <input className='mb-2' type="text"  name="price" placeholder='price' required/>
                
                    <textarea className='mb-2' type="text"  name="description" placeholder='description' required/>
            
                    <input className='mb-2' type="text"  name="supplier" placeholder='Supplier name' required/>
                    <button className='btn btn-primary m-2' type="submit">Add +</button>
                </form>
            </div>
            <div className="row">
                <div className="my-item-area">
                {
                            laptops.slice(0,9).map(item => <SingleItem
                            key={item._id}
                            item ={item}
                            ></SingleItem>)
                        }


                </div>
            </div>
            
        </div>
    );
};

export default AddItem;