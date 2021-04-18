import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5055/orders')
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <section>
        <div className="text-center mt-5 pt-3">
            <h5 className=" mt-5" style={{ textTransform: 'uppercase', fontSize:'30px' }}>Order Details</h5>
            
        </div>
        <div className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    orders.map(order => <OrderDetails order={order}></OrderDetails>)
                    
                }
            
            </div>
            
        </div>
          <Link to="/dashboard"><button style={{fontFamily:'Poppins'}} className="btn btn-brand text-white  mt-5"> Back To Dashboard </button></Link>
    </section>
    );
};

export default Orders;