import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const {inventoryId} = useParams();
    const [laptops, setLaptops] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/laptops')
        .then(res => res.json())
        .then(data => setLaptops(data));
    }, [])






// form control
    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const suppName = event.target.suppName.value;
        console.log(name, suppName);
        const productData = {name, suppName};

        // post data UI(form) to server
        fetch('http://localhost:5000/laptops', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(data => {
         
            const newLaptops = [...laptops, data];
            setLaptops(newLaptops);
               console.log(data);
        })


    }
    return (
        <div>
            <h1>Inventory:{inventoryId} </h1>
            
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Brand name' />
                <input type="text" name="suppName" placeholder='supplier name' />
                <input type="submit" value="Add item" />
            </form>

            <Link to="/" className="btn btn-primary">Home</Link>
            <h3>server:{laptops.length}</h3>
            <ul>
                {
                    laptops.map(laptop => <li key={laptop._id}>Name: {laptop.name} Supplier: {laptop.suppName} </li>)
                }
            </ul>

        </div>
    );
};

export default Inventory;