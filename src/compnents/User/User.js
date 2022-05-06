import React from 'react';
import './User.css'

const User = () => {
    return (
        <div className='user-area'>
               <h2 className='text-center text-primary m-3'>User team member</h2>
            <div className="user-team-member">
                <div className="single-user text-center">
                    <img src='./images/store-1.jpg' alt=''/>
                    <h6>Position: <span>Storekeeper</span></h6>
                    <p>Name: <span> Don Bradom</span></p>
                    <p>Email: <span>donbradom@gmail.com</span> </p>
                </div>
                <div className="single-user text-center">
                    <img src='./images/store-2.jpg' alt=''/>
                    <h6>Position: <span>Assist: Storekeeper</span></h6>
                    <p>Name: <span> Mor Ddanyel</span></p>
                    <p>Email: <span>danyeladom@gmail.com</span> </p>
                </div>
                <div className="single-user text-center">
                    <img src='./images/store-3.jpg' alt=''/>
                    <h6>Position: <span>Assist:Storekeeper</span></h6>
                    <p>Name: <span> HK coco</span></p>
                    <p>Email: <span>hkokoadom@gmail.com</span> </p>
                </div>
            </div>
        </div>
    );
};

export default User;