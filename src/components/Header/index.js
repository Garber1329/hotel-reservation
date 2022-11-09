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
                    <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        Logo
                    </Link>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/home" className="nav-link px-2 link-secondary">Home</Link></li>
                        <li><Link to="/reservation" className="nav-link px-2 link-dark">Reservation</Link></li>
                        <li><Link to="/" className="nav-link px-2 link-dark">Pricing</Link></li>
                        <li><Link to="/" className="nav-link px-2 link-dark">FAQs</Link></li>
                        <li><Link to="/" className="nav-link px-2 link-dark">About</Link></li>
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
                </div>
            </div>
        </header>

    );

}

export default Header;