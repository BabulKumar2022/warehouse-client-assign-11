import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Laptop Stock</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                    <Link className="nav-link" to="inventory">Inventory</Link>
                    <Link className="nav-link" to="blogs">Blogs</Link>
                    <Link className="nav-link " to="aboutme">AboutMe</Link>
                </div>
                </div>
            </div>
</nav>
        </div>
    );
};

export default Navbar;