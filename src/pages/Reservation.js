import React, {useEffect, useState} from 'react';
import Search from "../components/Search";
import AllRooms from "../components/AllRooms";
import Summary from "../components/Summary";
import RegisterForm from "../components/RegisterForm";
import OrderConfirmation from "../components/OrderConfirmation";
import OrderAccepted from "../components/OrderAccepted";

function Reservation({rooms, postReservation}) {
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
    const [newReservation, setNewReservation] = useState(0);

    function SelectRoom (room){
        if(steps === 0) {
            setSelectedRoom(room)
        }
    }

    useEffect(() => {
        setCountDate(checkOut.getDate()-checkIn.getDate())
        setTotalSum(selectedRoom.price * countDate);
    },[selectedRoom.price, countDate, checkIn, checkOut]);

    useEffect(() => {
        if(steps === 2) {
            const new1Reservation = {
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
            setNewReservation(new1Reservation);
        }


    },[checkIn, checkOut, firsName, lastName, email, telephone, specialRequest, totalSum, selectedRoom.id, steps]);

    function Steps(){
        if(steps === 0) {
            return(
                <AllRooms
                    rooms={rooms.filter(room => room.capacity >= adults)}
                    SelectRoom={SelectRoom}
                    />
            )
        } else if(steps === 1){
            return (
                <RegisterForm
                    firsName={firsName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    telephone={telephone}
                    setTelephone={setTelephone}
                    email={email}
                    setEmail={setEmail}
                    specialRequest={specialRequest}
                    setSpecialRequest={setSpecialRequest}/>
            )
        } else if(steps === 2){
            return (
                <OrderConfirmation
                    newReservation={newReservation}
                    selectedRoom={selectedRoom}
                />
            )
        }
    }

    function fPostReservation(){
        postReservation(newReservation)
    }

    if(steps !== 3){
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
                            priceRoom={selectedRoom.price}
                            countDate={countDate}
                            totalSum={totalSum}
                            adults={adults}
                            checkIn={checkIn}
                            checkOut={checkOut}
                            fPostReservation={fPostReservation}
                        />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                  <OrderAccepted/>
                </div>
            </div>
        );
    }

}

export default Reservation;