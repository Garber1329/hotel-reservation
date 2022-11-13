import React, {useState} from 'react';
import AdminNavbar from "../components/AdminNavbar";
import ShowReservation from "../components/ShowReservation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ShowCheck from "../components/ShowCheck-(In-or-Out)";
import ShowCFMessages from "../components/ShowCFMessages";

function Admin ({reservation, messages}) {
    const [dataSelection, setDataSelection] = useState("")
    const [reservRevers, setReservRevers] = useState([...reservation].reverse());
    const messagesRevers = [...messages].reverse();
    const [dateFirst, setDateFirst] = useState(new Date());
    const [dateSecond, setDateSecond] = useState(new Date());
    const [countReservation, setCountReservation] = useState(0);


    function CencelFilterReservation(){
        setReservRevers([...reservation].reverse());
    }

    function FilterReservation(){
        const newReserv = [...reservRevers].filter(res => {
            return (new Date(res.check_in_date) >= new Date(dateFirst.setHours(0,0,0)))
                &&
                (new Date(res.check_in_date) <= new Date(dateSecond.setHours(23,59,59)));
        });
        setReservRevers(newReserv);
        setCountReservation(0);
    }

    function OutDate() {
        if (dataSelection === "reservation"){
            return (
                <div>
                    <div className="d-flex align-items-center">
                        <div className="p-3">
                            First date:
                            <DatePicker
                                dateFormat='dd/MM/yyyy'
                                selected={dateFirst}
                                onChange={(date) => setDateFirst(date)}
                            />
                        </div>
                        <div className="p-3">
                            Second date:
                            <DatePicker
                                dateFormat='dd/MM/yyyy'
                                selected={dateSecond}
                                onChange={(date) => setDateSecond(date)}
                            />
                        </div>
                        <div className="p-3">
                            <button className="btn btn-lg btn-outline-primary"
                                onClick={()=>{
                                    FilterReservation()
                                }}
                            >Modify</button>
                        </div>
                        <div className="p-3">
                            <button className="btn btn-lg btn-outline-primary"
                                    onClick={()=>{
                                        CencelFilterReservation()
                                    }}
                            >Cencel</button>
                        </div>
                        Count: {countReservation}
                    </div>
                    <ShowReservation
                        reservation={reservRevers}
                        setCountReservation={setCountReservation}
                    />
                </div>
                )
        } else if (dataSelection === "CheckIn"){
            return (
                <div>
                    <div className='d-flex align-items-center'>
                        <div className="p-3">
                            Choose a check-in date:
                            <DatePicker
                                dateFormat='dd/MM/yyyy'
                                selected={dateFirst}
                                onChange={(date) => {
                                    setCountReservation(0)
                                    setDateFirst(date)}
                            }
                            />
                        </div>
                        Count: {countReservation}
                    </div>
                    <ShowCheck
                        setCountReservation={setCountReservation}
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
                            }).format(new Date(dateFirst))
                        )}
                    />
                </div>
            )
        } else if (dataSelection === "CheckOut"){
            return (
                <div>
                    <div className='d-flex align-items-center'>
                        <div className="p-3">
                            Choose a check-out date:
                            <DatePicker
                                dateFormat='dd/MM/yyyy'
                                selected={dateFirst}
                                onChange={(date) => {
                                    setCountReservation(0)
                                    setDateFirst(date)
                                }}
                            />
                        </div>
                        Count: {countReservation}
                    </div>
                    <ShowCheck
                        setCountReservation={setCountReservation}
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
                            }).format(new Date(dateFirst))
                        )}
                    />
                </div>
            )
        } else if (dataSelection === "CFMessages"){
            return (
                <ShowCFMessages
                    messages={messagesRevers}
                />
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