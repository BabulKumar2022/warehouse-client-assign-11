import React from 'react';
import { useParams } from 'react-router-dom';
import './ManageItem.css'

const ManageItem = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Product Id: {id}</h2>
        </div>
    );
};

export default ManageItem;