import React from 'react';
import AllRooms from "../components/AllRooms";

function Rooms({rooms}) {
    return (
        <div className="">
            <div className="row mb-5">
                <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 fw-normal">Our rooms</h1>
                        <p className="lead fw-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="btn btn-outline-secondary">View</div>
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <AllRooms
                        rooms={rooms}
                    />
                </div>
            </div>
        </div>

    );
}

export default Rooms;