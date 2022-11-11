import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {AuthContext} from "../context";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Reservation from "../pages/Reservation";
import Admin from "../pages/Admin";
import Rooms from "../pages/Rooms";
import About from "../pages/About";

const AppRouter = (props) => {
    const {isAuth} = useContext(AuthContext);

    return (
        <main className="main">
            {
                isAuth
                    ?
                    <Routes>
                        <Route path="/home" element={<About/>} />
                        <Route path="/about" element={<Home/>} />
                        <Route path="/rooms" element={
                            <Rooms
                                rooms={props.props.rooms.rooms}
                            />}
                        />
                        <Route path="/reservation" element={
                            <Reservation
                                rooms={props.props.rooms.rooms}
                                postReservation={props.props.postReservation}
                            />}
                        />
                        <Route path="/admin" element={
                            <Admin
                                reservation={props.props.reservation.reservation}
                        />} />
                        {/*redirect*/}
                        <Route path="/" element={<Navigate replace to="/home" />} />
                    </Routes>
                    :
                    <Routes>
                        <Route path="/home" element={<Home/>} />
                        <Route path="/home" element={<About/>} />
                        <Route path="/rooms" element={
                            <Rooms
                                rooms={props.props.rooms.rooms}
                            />}
                        />
                        <Route path="/reservation" element={
                            <Reservation
                                rooms={props.props.rooms.rooms}
                                postReservation={props.props.postReservation}
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
