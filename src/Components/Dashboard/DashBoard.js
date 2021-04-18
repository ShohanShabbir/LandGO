import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Orders from '../Orders/Orders';
import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);

    const containerStyle = {
        backgroundColor: "#F4FDFB",
        
        
    }
    return (
        <section className="d-flex align-items-center">
            <div style={containerStyle} className="row w-100">
                <div style={containerStyle} className="col-md-6 col-sm-6 col-12 w-100">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                   <h1 style={{marginTop:'300px'}}>Welcome To Dashboard</h1>
                </div>
                
            </div>
        </section>
    );
};

export default DashBoard;