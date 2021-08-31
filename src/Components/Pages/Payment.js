import React, {useState} from 'react';
import {Container} from 'react-bootstrap'
import Paypal from '../../Components/Sections/Paypal'
import Paypal2 from '../../Components/Sections/Paypal2'
import Paypal3 from '../Sections/Paypal3';
function Payment() {

    const [checkout, setCheckOut] = useState(false);
    const [checkout2, setCheckOut2] = useState(false);
    const [checkout3, setCheckOut3] = useState(false);

    return (
        <div>
            <div className="card-section offset">
                <Container>
                    <div className="card-center payment-section">
                        <h1 className="searchTitle">Application Payment</h1>
                        <h5 className="application-info">
                            To be displayed on the website, payment is required. An inital $15.00 is needed, membership renewals are $35.00, new members with website listings are $50.00. Payment is done via Paypal accounts or credit card information.
                        </h5>
                        <div className="pay-row">
                            <div className="pay-card">
                                <h2>
                                    Membership Renewal
                                </h2>
                                <h5 className="payment-offset">
                                    $35.00
                                </h5>

                                {
                                checkout ? (
                                    <Paypal/>) : (
                                    <a    
                                    href="#!"
                                     className="landingButton" onClick={
                                        () => {
                                            setCheckOut(true);
                                        }
                                    }>
                                        Checkout
                                    </a>
                                )
                            } </div>
                            <div className="pay-card">
                                <h2>
                                New Member with Website Listing
                                </h2>
                                <h5 className="payment-offset">
                                   $50.00
                                </h5>
                                {
                                checkout3 ? (
                                    <Paypal2/>) : (
                                    <a
                                    href="#!"
                                     className="landingButton" onClick={
                                        () => {
                                            setCheckOut3(true);
                                        }
                                    }>
                                        Checkout
                                    </a>
                                )
                            } </div>
                            <div className="pay-card">
                                <h2>
                                New Member without Website Listing
                                </h2>
                                <h5 className="payment-offset">
                                   $35.00
                                </h5>
                                {
                                checkout2 ? (
                                    <Paypal3/>) : (
                                    <a
                                    href="#!"
                                     className="landingButton" onClick={
                                        () => {
                                            setCheckOut2(true);
                                        }
                                    }>
                                        Checkout
                                    </a>
                                )
                            } </div>

                        
                            <div className="pay-card">
                                <h2>
                                    Retired
                                </h2>
                                <h5 className="payment-offset">
                                   $0.00
                                </h5>
                                 </div>
                            </div>

                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Payment;
