import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='about-container'>
            <div className="row col-4  mx-auto">
                <h1 className='about-header text-center'>Contactus</h1>
                <div className="about-img ">
                     <img src="./images/tutor (2).jpg" alt="" />
                </div>
                <div className="about-description mt-3 ">
                    <h4>Name: Babul Kumar Biswas </h4> 
                    <h5> Bss(Hons), MSS in Economics</h5>
                    <p>I am a professional laptop distributor. I distribute all kinds of laptop  more....</p>
                    
                </div>
                <Link to="/home" className="btn btn-primary">Go home</Link>
            </div>
        </div>
    );
};

export default ContactUs;