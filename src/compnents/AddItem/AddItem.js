import React from 'react';
import './AddItem.css'

const AddItem = () => {
    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const suppName = event.target.suppName.value;
        console.log(name, suppName);
        const productData = {name, suppName};

        // post data UI to server
        fetch('http://localhost:5000/laptop', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })


    }
    
    return (
        <div>
            <h1>Add Item</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Brand name' />
                <input type="text" name="suppName" placeholder='supplier name' />
                <input type="submit" value="Add item" />
            </form>
            
        </div>
    );
};

export default AddItem;