import React, {useContext} from 'react';
import {Routes, Route, Navigate/*, Redirect*/} from 'react-router-dom';
/*import {privateRoutes, publicRoutes} from "./index";*/
import {AuthContext} from "../context";
import Main from "../pages/Main";
import Login from "../pages/Login";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        <main>
            {
                isAuth
                    ?
                    <Routes>
                        <Route path="/main" element={<Main/>} />
                        {/*redirect*/}
                        <Route path="/" element={<Navigate replace to="/main" />} />
                    </Routes>
                    :
                    <Routes>
                        <Route path="/main" element={<Main/>} />
                        <Route path="/login" element={<Login/>} />
                        {/*redirect*/}
                        <Route path="/" element={<Navigate replace to="/main" />} />
                    </Routes>
            }
        </main>

    );
};

export default AppRouter;
