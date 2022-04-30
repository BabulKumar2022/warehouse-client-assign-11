import React, { useEffect, useState } from 'react';

const useHooks = (url) => {

    const [users, setUsers] = useState([]);
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data=> setUsers(data))
    },[])
   
    return users;
};

export default useHooks;