import React from 'react';
import {Link} from "react-router-dom";

function Footer(){

    return (
        <footer className="footer">
            <div className="container">
                <div className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link to="/home" className="nav-link px-2 text-muted">Home</Link></li>
                        <li className="nav-item"><Link to="/reservation" className="nav-link px-2 text-muted">Reservation</Link></li>
                        <li className="nav-item"><Link to="/rooms" className="nav-link px-2 text-muted">Rooms</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-muted">Contact</Link></li>
                    </ul>
                    <p className="text-center text-muted">© 2022 Company, Inc</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;