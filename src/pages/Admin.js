import React, {useState} from 'react';
import AdminNavbar from "../components/AdminNavbar";
import ShowReservation from "../components/ShowReservation";

function Admin ({rooms, reservation}) {
    const [dataSelection, setDataSelection] = useState("")

    function OutDate() {
        if (dataSelection === "reservation"){
            return (
                    <ShowReservation
                        reservation={reservation}
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