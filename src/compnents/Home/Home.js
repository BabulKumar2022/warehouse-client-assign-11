import React from 'react';
import './Home.css'
import Services from './Services/Services';
const Home = () => {
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
            
            <section>
                <div className="most stocked items">
                    <h1 className='text-center'>Most stocked items</h1>
                    <div className=" row user-setting">
                    <img src='./images/hiegth-secttion.jpg' alt=''/>
                    <h1>2nd</h1>
                    <h3></h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;