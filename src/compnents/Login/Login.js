import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { navigate, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin/SocialLogin';
import { sendEmailVerification } from 'firebase/auth';






const Login = () => { 
    const [login, setLogin]= useState(false);
    const [passWordError, setPassWordError] = useState('');
   
   const [userInfo, setUserInfo]= useState({
       email: '',
       password: '',
       confirmPassword: ''
   })
//    new user creat
        const [
            createUserWithEmailAndPassword,
            createUser,
            createLoading,
            createError,
        ] = useCreateUserWithEmailAndPassword(auth);

        // current user login
        const [
            signInWithEmailAndPassword,
            user, 
            loading,
            error,
          ] = useSignInWithEmailAndPassword(auth);

          const [loginUser, loginLoading, loginError] = useAuthState(auth);

   const handleFormInput = (event) =>{
       console.log(event.target.name, event.target.value);
       userInfo[event.target.name]= event.target.value;
   }
   
    const handleSubmit = (event) =>{
        event.preventDefault();
        
        if(! login){
            if(userInfo.password !== userInfo.confirmPassword){
                setPassWordError('Password can not match');
                return;
            }


            setPassWordError('');
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
            
        }else{
            signInWithEmailAndPassword(userInfo.email, userInfo.password);
            verifyEmail();
        }


        console.log(userInfo);
    }
   
    let navigate = useNavigate();
    let location = useLocation();
    
    let from = location.state?.from?.pathname || "/";
    if(loginUser){
        navigate(from, { replace: true });
    }
     
    const verifyEmail =() =>{
        sendEmailVerification(auth.currentUser)
        .then(() =>{
            console.log('Email sent verification')
        })
    }


    return (
        <div className='container '>
           
            <form className=' w-50 mx-auto mt-5' onSubmit={handleSubmit}>
            
            <h1>{login ? 'Login'  : 'Register'} </h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input required onBlur={(event)=> handleFormInput(event)} type="text" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input required onBlur={(event)=> handleFormInput(event)} type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                {
                   !login && <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input onBlur={(event)=> handleFormInput(event)} type="password" name="confirmPassword" className="form-control" id="exampleInputPassword1"/>
                </div>
                }
                <div className="mb-3 form-check">
                    <input required type="checkbox" className="form-check-input" id="exampleCheck1" onChange={()=> setLogin(!login)}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Already Register</label>
                </div>
                <button type="submit" className="btn btn-primary">{login ? 'Login' : 'Register'}</button> 
                

                <p className='text-danger'>{passWordError}</p>
                {
                    createError && <p className='text-danger'>{createError.message}</p>
                }
                {
                    createUser && <p className='text-success'>User create successfully</p>
                }
                {
                    user && <p className='text-success'>Login successfully</p>
                }
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;