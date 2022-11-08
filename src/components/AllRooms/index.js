import React from 'react';
import OneRoom from "../OneRoom";

function AllRooms({rooms, SelectRoom, setSelectedRoom}) {
    return <div>
        {
            rooms.length > 0 ?
                (
                    <div>
                        {rooms.map(room => {
                                return (
                                    <OneRoom
                                        key={room.id}
                                        room={room}
                                        SelectRoom={SelectRoom}
                                        setSelectedRoom={setSelectedRoom}
                                    />
                                )
                            }
                        )}
                    </div>
                )
                :
                (<div>Кімнати відсутні</div>)
        }
    </div>

}

export default AllRooms;