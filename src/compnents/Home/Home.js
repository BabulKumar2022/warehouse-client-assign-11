import React from 'react';

import './Home.css'
import Services from './Services/Services';
import { useNavigate } from 'react-router-dom';
import User from '../User/User';
const Home = (_id) => {

    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/inventory/${_id}`)
    }


    return (
        <div className='container home-page'>
            <div className="header-area">
                <div className="header-hero">
                    <div className="heder-left-text">
                    <h1>Global laptop deals  </h1>
                  <h1 className='color'>Largest laptop Stock Management</h1>
                  <p>The best for you. Now here are available pro smart high quality laptop and other electronics device stock management system. more different types of stock controls web application your need. you can contact us soon.</p>
                    </div>
                    <div className="heder-right-img">
                    <img src='./images/laptops.jpg' alt=''/>
                    </div>
                </div>

            </div>
            <Services ></Services>
            <div className=" text-center m-4">
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Product Manage</button>
            </div>
            
            <section>
                <div className="most-stocked-items">
                    <h1 className='text-center text-primary mb-3'>Stock managing idea</h1>
                    <div className=" row user-setting ">
                        <div className="image-area">
                         <img src='./images/hiegth-secttion.jpg' alt=''/>
                        </div>
                        <div className="text-area">
                            <p>Flexible product information entry on this website.User interface data entry form as a manage tab on navbar after user login. User can any product update by  mange tab on navbar.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="two-sec-area">
                <User></User>
                </div>
            </section>
        </div>
    );
};

export default Home;