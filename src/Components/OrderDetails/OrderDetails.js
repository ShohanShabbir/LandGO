import React from 'react';
import { DropdownButton,Dropdown } from 'react-bootstrap';

const OrderDetails = (orders) => {
    const { name, price, imageURL } = orders.order;
    return (
        <div className="col-md-4 text-center mt-5">

            <img style={{height:'50px'}} src={imageURL} alt=""/>
            <h5 className="mt-5" style={{ fontSize: '16px' }}>{name}</h5>
            <h3>{price}</h3>
            <DropdownButton variant="secondary" id="dropdown-basic-button" title="Status">
                <Dropdown.Item href="#/action-1">Pending</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Done</Dropdown.Item>
            </DropdownButton>

        </div>
    );
};

export default OrderDetails;