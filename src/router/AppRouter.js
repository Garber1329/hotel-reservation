import React, {useContext} from 'react';
import {Routes, Route, Navigate/*, Redirect*/} from 'react-router-dom';
/*import {privateRoutes, publicRoutes} from "./index";*/
import {AuthContext} from "../context";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        <main>
            {
                isAuth
                    ?
                    <Routes>
                        <Route path="/home" element={<Home/>} />
                        {/*redirect*/}
                        <Route path="/" element={<Navigate replace to="/home" />} />
                    </Routes>
                    :
                    <Routes>
                        <Route path="/home" element={<Home/>} />
                        <Route path="/login" element={<Login/>} />
                        {/*redirect*/}
                        <Route path="/" element={<Navigate replace to="/home" />} />
                    </Routes>
            }
        </main>

    );
};

export default AppRouter;
