import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context";
import {Link} from "react-router-dom";

function Header(){
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="#" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    Logo
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/main" className="nav-link px-2 link-secondary">Home</Link></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
                </ul>

                <div className="col-md-3 text-end">
                    {isAuth ?
                        <button onClick={logout} type="button" className="btn btn-primary">Log out</button>
                        :
                        <Link to="/login" >
                            <button type="button" className="btn btn-outline-primary me-2">Login</button>
                        </Link>
                    }
                </div>
            </header>
        </div>
    );

}

export default Header;