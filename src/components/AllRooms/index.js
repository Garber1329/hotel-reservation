import React from 'react';
import OneRoom from "../OneRoom";

function AllRooms({rooms, SelectRoom}) {
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