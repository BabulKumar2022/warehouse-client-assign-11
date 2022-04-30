import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);

    let location = useLocation();
    if(loading){
        return <p>Please wait.......</p>
                
    }
    if (!user){

        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }

    return children;
};

export default RequireAuth;