import React from 'react';
import "../ShowReservation/index.scss";

function ShowCheck({reservation, setCountReservation}) {

    return (
        <div className="show-reservation">
            { reservation.length > 0 ? (
                        <ul className="list-group">
                            <li className="list-group-item active d-flex" aria-current="true">
                                <div>id</div>
                                <div>id_room</div>
                                <div>check_in_date</div>
                                <div>check_out_date</div>
                                <div>first_name</div>
                                <div>last_name</div>
                                <div>special_request</div>
                                <div>email</div>
                                <div>phone</div>
                                <div>total_price</div>
                                <div>date_reservation</div>
                            </li>
                            {
                                reservation.map((res, index) => {
                                    return(
                                        <li className="list-group-item d-flex" aria-current="true" key={index}>
                                            {setCountReservation(index+1)}
                                            <div>{res.id}</div>
                                            <div>{res.id_room}</div>
                                            <div>
                                                {new Intl.DateTimeFormat('en-GB', {
                                                    year: 'numeric',
                                                    month: 'numeric',
                                                    day: 'numeric'
                                                }).format(new Date(res.check_in_date))}
                                            </div>
                                            <div>
                                                {new Intl.DateTimeFormat('en-GB', {
                                                    year: 'numeric',
                                                    month: 'numeric',
                                                    day: 'numeric'
                                                }).format(new Date(res.check_out_date))}
                                            </div>
                                            <div>{res.first_name}</div>
                                            <div>{res.last_name}</div>
                                            <div>{res.special_request}</div>
                                            <div>{res.email}</div>
                                            <div>{res.phone}</div>
                                            <div>{res.total_price}</div>
                                            <div>
                                                {new Intl.DateTimeFormat('en-GB', {
                                                    year: 'numeric',
                                                    month: 'numeric',
                                                    day: 'numeric',
                                                    hour: "2-digit",
                                                    minute: "numeric"
                                                }).format(new Date(res.date_reservation))}
                                            </div>
                                        </li>
                                    )

                                }

                            )}
                        </ul>
                    )
                    :
                    (
                        <div>There are no reservations</div>
                    )

            }
        </div>
    );
}

export default ShowCheck;