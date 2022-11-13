import React from 'react';

function Summary({steps, setSteps, priceRoom, totalSum, countDate, adults, checkIn, checkOut, nameRoom, fPostReservation, selectedServices}) {

    return (
        <aside>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Reservation Summary</h3>
                    <div className="d-flex justify-content-between">
                        <h5>Room: {nameRoom}</h5>
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
                        <div className="font-weight-bold">People: {adults}</div>
                    </div>
                    {(priceRoom && totalSum) > 0 ? <div>
                            <div className="mb-3">
                                <div className="font-weight-bold">Price room: {priceRoom} $</div>
                            </div>
                            <div className="mb-3">
                                <div className="font-weight-bold">Night: {countDate}</div>
                            </div>
                            <div className="mb-3">
                                {
                                    selectedServices.map((serv, index) =>
                                        <div className="font-weight-bold mt-1" key={index}>
                                            {serv.name}: {serv.price}$
                                        </div>
                                    )
                                }
                            </div>
                            <div className="card-total">
                                <div className="mb-3">
                                    <h5 className="price">Total</h5>
                                    <h5 className="price">$ {totalSum}</h5>
                                </div>
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                    <div className="btn btn-lg btn-primary" onClick={() => {
                        setSteps(steps+1)
                        if(steps===3){
                            fPostReservation()
                        }
                    }}>Continue</div>
                </div>
            </div>
        </aside>
    );

}

export default Summary;