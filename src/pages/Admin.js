import React, {useState} from 'react';
import AdminNavbar from "../components/AdminNavbar";
import ShowReservation from "../components/ShowReservation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ShowCheck from "../components/ShowCheck-(In-or-Out)";

function Admin ({reservation}) {
    const [dataSelection, setDataSelection] = useState("")
    const reservRevers = [...reservation].reverse();
    const [date, setDate] = useState(new Date())

    function OutDate() {
        if (dataSelection === "reservation"){
            return (
                    <ShowReservation
                        reservation={reservRevers}
                    />
                )
        } else if (dataSelection === "CheckIn"){
            return (
                <div>
                    <div className="p-3">
                        Choose a check-in date:
                        <DatePicker
                            dateFormat='dd/MM/yyyy'
                            selected={date}
                            onChange={(date) => setDate(date)}
                        />
                    </div>
                    <ShowCheck
                        reservation={reservRevers.filter(res =>
                            new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric'
                            }).format(new Date(res.check_in_date))
                            ===
                            new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric'
                            }).format(new Date(date))
                        )}
                    />
                </div>
            )
        } else if (dataSelection === "CheckOut"){
            return (
                <div>
                    <div className="p-3">
                        Choose a check-out date:
                        <DatePicker
                            dateFormat='dd/MM/yyyy'
                            selected={date}
                            onChange={(date) => setDate(date)}
                        />
                    </div>
                    <ShowCheck
                        reservation={reservRevers.filter(res =>
                            new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric'
                            }).format(new Date(res.check_out_date))
                            ===
                            new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric'
                            }).format(new Date(date))
                        )}
                    />
                </div>
            )
        }
    }

    return (
        <div className="container">
            <AdminNavbar
                setDataSelection={setDataSelection}
            />
            {OutDate()}
        </div>
    );
}

export default Admin;