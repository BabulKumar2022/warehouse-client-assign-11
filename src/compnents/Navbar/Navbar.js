import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './Navbar.css'

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid bg-primary ">
            <Link className="navbar-brand" to='/'></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blogs</Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link" to="/contactus">Contact Us</Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link text-white" to="/totalitem">{!user ? '' : 'Total item'}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-white" to="/inventory/id">{!user ? '' : 'Inventory'}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-white" to="/manageitem">{!user ? '' : 'Manage Item'}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-white" to="/additem">{!user ? '' : 'Add Item'}</Link>
                </li>
            </ul>
            <span className="navbar-text">
                <ul className='navbar-nav'>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">{
                    !user ? 'Login' : <span> <button
                    onClick={()=>signOut(auth)}
                    type="button" className="btn btn-link text-decoration-none text-white">Sign out</button>
                    </span>
                        }</Link>
                    </li>
                </ul>
                
            </span>
            </div>
        </div>
</nav>
    );
};

export default Navbar;