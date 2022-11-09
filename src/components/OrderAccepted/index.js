import React from 'react';
import {Link} from "react-router-dom";

function OrderAccepted() {

    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Order accepted</h1>
                <p className="col-md-8 fs-4" >
                    Thank you for your order. Wait for a reply to your mail.
                </p>
                <Link to="/home" className="btn btn-primary btn-lg">Go to home page</Link>
            </div>
        </div>
    );

}

export default OrderAccepted;