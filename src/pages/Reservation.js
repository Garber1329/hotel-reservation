import React, {useEffect, useState} from 'react';
import Search from "../components/Search";
import AllRooms from "../components/AllRooms";
import Summary from "../components/Summary";
import RegisterForm from "../components/RegisterForm";

function Reservation(props) {
    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date());
    const [adults, setAdults] = useState(1);
    const [countDate, setCountDate] = useState(0);
    const [selectedRoom, setSelectedRoom] = useState(0);
    const [steps, setSteps] = useState(0)
    const [totalSum, setTotalSum] = useState(0);
    const [firsName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [specialRequest, setSpecialRequest] = useState("");

    const newReservation = {
        id_room: selectedRoom.id,
        date_reservation: new Date().toISOString(),
        check_in_date: checkIn,
        check_out_date: checkOut,
        first_name: firsName,
        last_name: lastName,
        email: email,
        phone: telephone,
        special_request: specialRequest,
        total_price: totalSum
    };

    useEffect(() => {
        setCountDate(checkOut.getDate()-checkIn.getDate())
        setTotalSum(selectedRoom.price * countDate);
    },[selectedRoom.price, countDate, checkIn, checkOut]);

    function SelectRoom (room){
        if(steps === 0) {
            setSelectedRoom(room)
        } else if(steps === 1){

        }

    }

    function Steps(){
        if(steps === 0) {
            return(
                <AllRooms
                    rooms={props.rooms.rooms.filter(room => room.capacity >= adults)}
                    SelectRoom={SelectRoom}
                    />
            )
        } else if(steps === 1){
            return (
                <RegisterForm
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setTelephone={setTelephone}
                    setEmail={setEmail}
                    setSpecialRequest={setSpecialRequest}/>
            )
        } else if(steps === 1){
            return (
                <div></div>
            )
        }
    }

    return (
        <div className="container">
            <div className="row">
                <Search
                    checkIn={checkIn}
                    setCheckIn={setCheckIn}
                    checkOut={checkOut}
                    setCheckOut={setCheckOut}
                    setAdults={setAdults}/>
            </div>
            <div className="row">
                <div className="col-8">
                    {Steps()}
                </div>
                <div className="col-4">
                    <Summary
                        steps={steps}
                        setSteps={setSteps}
                        nameRoom={selectedRoom.name}
                        totalSum={totalSum}
                        adults={adults}
                        checkIn={checkIn}
                        checkOut={checkOut}
                    />
                </div>
            </div>
        </div>
    );
}

export default Reservation;