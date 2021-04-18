import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleOrderForm from './SimpleOrderFrom';
import SplitCardForm from './SplitCardForm';
import Sidebar from '../Sidebar/Sidebar';

const stripePromise = loadStripe('pk_test_51IhUqlGIVMddRSec0GIjoKnDyFAqncDjWNhqnRKMZJZM23y7XiBW1kjML2CtWJCIUGuxTDRqHUCJVw6Ov7t1Towy00FlXlI9mk');

const Order = () => {
    return (

        <div className="row w-100">
            <div className="col-md-6">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6">
                <Elements stripe={stripePromise}>
                    <SimpleOrderForm></SimpleOrderForm>
                </Elements>
            </div>

        </div>
    );
};

export default Order;