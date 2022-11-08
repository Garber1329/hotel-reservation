import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {AuthContext} from "../context";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Reservation from "../pages/Reservation";

const AppRouter = (props) => {
    const {isAuth} = useContext(AuthContext);

    return (
        <main>
            {
                isAuth
                    ?
                    <Routes>
                        <Route path="/home" element={<Home/>} />
                        <Route path="/reservation" element={
                            <Reservation
                                rooms={props.props.rooms}
                            />}
                        />
                        {/*redirect*/}
                        <Route path="/" element={<Navigate replace to="/home" />} />
                    </Routes>
                    :
                    <Routes>
                        <Route path="/home" element={<Home/>} />
                        <Route path="/reservation" element={
                            <Reservation
                                rooms={props.props.rooms}
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
