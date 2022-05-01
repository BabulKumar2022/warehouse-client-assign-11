import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if(user){
          navigate('/');
      }
    
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{height: '1px'}} className="bg-primary w-50"></div>
                <p className='mt-2 px-2' >or</p>
                <div style={{height: '1px'}} className="bg-primary w-50"></div>
            </div>
            <div  className="text-center mb-5">
                <button className=" btn btn-primary" onClick={()=> signInWithGoogle()}> Google SignIn</button>
            </div>
        </div>
    );
};

export default SocialLogin;