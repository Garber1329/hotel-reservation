import React from 'react';
import OneRoom from "../OneRoom";

function OrderConfirmation({selectedRoom, newReservation}){

    return (
        <div>
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Your room:
                        <OneRoom
                        room={selectedRoom}/>
                    </li>
                    <li className="list-group-item">CheckIn:<span> </span>
                        {new Intl.DateTimeFormat('en-GB', {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric'
                        }).format(newReservation.check_in_date)}
                    </li>
                    <li className="list-group-item">CheckOut:<span> </span>
                        {new Intl.DateTimeFormat('en-GB', {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric'
                        }).format(newReservation.check_out_date)}
                    </li>
                    <li className="list-group-item">First name: {newReservation.first_name}</li>
                    <li className="list-group-item">Last name: {newReservation.last_name}</li>
                    <li className="list-group-item">Email: {newReservation.email}</li>
                    <li className="list-group-item">Phone: {newReservation.phone}</li>
                    {/*<li className="list-group-item">Selected services:
                        {newReservation.selectedServices > 0 ?
                            <div>
                                {newReservation.selectedServices.map((sel,index) =>
                                    <div className="ms-4" key={index}>
                                        {sel.name}
                                    </div>
                                )}
                            </div>
                            :
                            <div></div>
                        }
                    </li>*/}
                    <li className="list-group-item">Special request: {newReservation.special_request}</li>
                </ul>
            </div>
        </div>
    );

}

export default OrderConfirmation;