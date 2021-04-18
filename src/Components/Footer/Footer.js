import React from 'react';
import logo from '../../images/landgo.png';
import './Footer.css';


const Footer = () => {
    return (
        <footer class="container-fluid bg-grey py-5 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6 ">
                                <div class="logo-part mt-5 ">
                                    <img src={logo} class="w-50 logo-footer" />
                                    
                                </div>
                            </div>
                            <div class="col-md-6 px-4">
                                <h6> About Company</h6>
                                <p>From planting a tree to create a patio we can help </p>
                                <a href="#" class="btn-footer"> More Info </a><br />
                                <a href="#" class="btn-footer"> Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6 px-4">
                                <h6> Help us</h6>
                                <div class="row ">
                                    <div class="col-md-6">
                                        <ul>
                                            <li> <a href="#"> Home</a> </li>
                                            <li> <a href="#"> About</a> </li>
                                            <li> <a href="#"> Service</a> </li>
                                            <li> <a href="#">Philosophy</a> </li>
                                            <li> <a href="#"> Reviews</a> </li>
                                            <li> <a href="#"> Admin</a> </li>
                                            <li> <a href="#"> Contact</a> </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6 px-4">
                                        <ul>
                                            <li> <a href="#"> Our Facility</a> </li>
                                            <li> <a href="#"> Fax</a> </li>
                                            <li> <a href="#"> Terms</a> </li>
                                            <li> <a href="#"> Policy</a> </li>
                                            <li> <a href="#"> Refunds</a> </li>
                                            <li> <a href="#"> PayPal</a> </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 ">
                                <h6> Newsletter</h6>
                                <div class="social">
                                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                </div>
                                
                                <p className="mt-5 pt-3">Designed By Shohan Shabbir</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;