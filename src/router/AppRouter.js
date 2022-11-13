import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {AuthContext} from "../context";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Reservation from "../pages/Reservation";
import Admin from "../pages/Admin";
import Rooms from "../pages/Rooms";
import Contact from "../pages/Contact";

const AppRouter = (props) => {
    const {isAuth} = useContext(AuthContext);

    return (
        <main className="main">
            {
                isAuth
                    ?
                    <Routes>
                        <Route path="/home" element={<Home/>} />
                        <Route path="/contact" element={
                            <Contact
                                postCFMessage={props.props.postCFMessage}
                            />}
                        />
                        <Route path="/rooms" element={
                            <Rooms
                                rooms={props.props.rooms.rooms}
                            />}
                        />
                        <Route path="/reservation" element={
                            <Reservation
                                rooms={props.props.rooms.rooms}
                                postReservation={props.props.postReservation}
                                services={props.props.services.services}
                            />}
                        />
                        <Route path="/admin" element={
                            <Admin
                                reservation={props.props.reservation.reservation}
                                messages={props.props.messages.messages}
                        />} />
                        {/*redirect*/}
                        <Route path="/" element={<Navigate replace to="/home" />} />
                    </Routes>
                    :
                    <Routes>
                        <Route path="/home" element={<Home/>} />
                        <Route path="/contact" element={
                            <Contact
                                postCFMessage={props.props.postCFMessage}
                            />}
                        />
                        <Route path="/rooms" element={
                            <Rooms
                                rooms={props.props.rooms.rooms}
                            />}
                        />
                        <Route path="/reservation" element={
                            <Reservation
                                rooms={props.props.rooms.rooms}
                                postReservation={props.props.postReservation}
                                services={props.props.services.services}
                            />
                        } />
                        <Route path="/login" element={<Login/>} />
                        {/*redirect*/}
                        <Route path="/" element={<Navigate replace to="/home" />} />
                    </Routes>
            }
        </main>

    );
};

export default AppRouter;
