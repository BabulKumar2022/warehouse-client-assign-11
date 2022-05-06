import React from 'react';
import './AddItem.css'


const AddItem = () => {
 
   const handleAddUser = event =>{
       event.preventDefault();
       const name = event.target.name.value;
       const email =event.target.email.value;
    
       const user ={name, email};
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
        <div className='w-50 mx-auto text-center'>
            <h2>Add new item</h2>
            <form onSubmit={handleAddUser} >
                <input type="text"  name="name" placeholder='Brand name' required/>
                <br />
                <input type="text"  name="email" placeholder='email name' required/>
                <br />
                <button className='btn btn-primary m-2' type="submit">Add +</button>
            </form>
            
        </div>
    );
};

export default AddItem;