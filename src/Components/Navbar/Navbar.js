import React from 'react';
import landgo from '../../images/landgo.png';
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img className="img-fluid" style={{height:'50px'}} src={landgo} alt=""/></a>
                    <div  class="collapse navbar-collapse navbar-hover " id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a style={{marginRight:'30px'}} class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a style={{marginRight:'30px'}} class="nav-link active" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a style={{marginRight:'30px'}} class="nav-link active" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a style={{marginRight:'30px'}} class="nav-link active" href="#">Admin</a>
                            </li>
                            <li class="nav-item">
                               <Link to="/dashboard"><a style={{marginRight:'30px'}} class="nav-link active" href="#">Dashboard</a></Link>
                            </li>
                            <li class="nav-item">
                                <a  style={{marginRight:'30px'}} class="nav-link active" href="#" tabindex="-1" aria-disabled="true">Contact</a>
                            </li>
                           <Link to="/login"><button class="btn btn-brand text-white">Login</button></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;