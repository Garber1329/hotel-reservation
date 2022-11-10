import React from 'react';
import {baseUrl} from "../../store/baseUrl";

function OneRoom({room, SelectRoom}){
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={baseUrl+room.photo} className="img-fluid rounded-start" alt="..."></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{room.name}</h5>
                        <p className="card-text">{room.desc}</p>
                        <div className="d-flex">
                            <p className="card-text"><small className="text-muted">Size: {room.size}</small></p>
                            <p className="card-text ms-5"><small className="text-muted">Beds: {room.beds}</small></p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="card-text"><small className="text-muted">Capacity: {room.capacity}</small></p>
                            <div className="btn btn-primary" onClick={() => {
                                                                    SelectRoom(room)
                                                                    }}>
                                <h5 className="card-text">{room.price}$</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OneRoom;