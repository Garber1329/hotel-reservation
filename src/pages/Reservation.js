import React, {useState} from 'react';
import Search from "../components/Search";
import AllRooms from "../components/AllRooms";
import Summary from "../components/Summary";

function Reservation(props) {
    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date());
    const [adults, setAdults] = useState(0);
    const [countDate, setCountDate] = useState(0);
    const [selectedRoom, setSelectedRoom] = useState(0);
    const [steps, setSteps] = useState(0)

    function SelectRoom (){
        setCountDate(checkOut.getDate()-checkIn.getDate())
    }
    function Steps(){
        if(steps === 0) {
            return(
                <AllRooms
                    rooms={props.rooms.rooms.filter(room => room.capacity >= adults)}
                    SelectRoom={SelectRoom}
                    setSelectedRoom={setSelectedRoom}/>
            )
        } else if(steps === 1){
            return (
                <div>step 2</div>
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
                        setSteps={setSteps}/>
                </div>
            </div>
        </div>
    );
}

export default Reservation;