import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faHome, faGripHorizontal, faUserPlus, faShoppingCart, faStickyNote, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/landgo.png';



const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between  col-md-5 py-5 px-4" style={{ height: "130vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <img style={{ height: '80px' }} src={logo} alt="" />
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/order" className="text-white">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReviews" className="text-white" >
                            <FontAwesomeIcon icon={faStickyNote} /> <span>Add Reviews</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders" className="text-white" >
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Manage Service</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};


export default Sidebar;