import React, {useContext} from 'react';
import {AuthContext} from "../../context";
import {Link} from "react-router-dom";

function Header(){
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <header className="header">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <Link to="/" className="logo d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        Luxury Hotel
                    </Link>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/home" className="nav-link px-2 link-dark">Home</Link></li>
                        <li><Link to="/reservation" className="nav-link px-2 link-dark">Reservation</Link></li>
                        <li><Link to="/rooms" className="nav-link px-2 link-dark">Rooms</Link></li>
                        <li><Link to="/contact" className="nav-link px-2 link-dark">Contact</Link></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        {isAuth ?(
                            <div>
                                <Link to="/admin" className="btn btn-outline-primary">Admin panel</Link>
                                <Link onClick={logout} to="/home" className="btn btn-primary ms-2">Log out</Link>
                            </div>
                            )
                            :
                            <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </header>

    );

}

export default Header;