import React from 'react';

function Summary({steps, setSteps, totalSum, adults, checkIn, checkOut, nameRoom}) {

    return (
        <aside>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Reservation Summary</h5>
                    <div className="d-flex justify-content-between">
                        <h3>Room: {nameRoom}</h3>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div>
                            <div className="font-weight-bold">Check in</div>
                            <div>From 15.00h</div>
                        </div>
                        <div>
                            <div className="font-weight-bold">Check out</div>
                            <div>Before 12.00h</div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="font-weight-bold">Reservation date</div>
                        <div>From <strong>
                            {new Intl.DateTimeFormat('en-GB', {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric'
                        }).format(checkIn)}
                        </strong> to <strong>
                            {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric'
                            }).format(checkOut)}
                        </strong></div>
                    </div>
                    <div className="mb-3">
                        <div className="font-weight-bold">People</div>
                        <div>{adults} Adults</div>
                    </div>
                    <div className="card-total">
                        <div className="mb-3">
                            <div>
                                <div className="price">Total</div>
                            </div>
                            <div className="price">€ {totalSum}</div>
                        </div>
                    </div>
                    <div className="btn btn-lg btn-primary" onClick={() => {setSteps(steps+1)}}>Continue</div>
                </div>
            </div>
        </aside>
    );

}

export default Summary;