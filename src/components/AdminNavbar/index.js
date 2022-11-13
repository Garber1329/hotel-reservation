import React, {useState} from 'react';

function AdminNavbar({setDataSelection}) {

    const [navTitle, setNavTitle]=useState('');

    return (
        <nav className="navbar bg-white border border-gray border-1">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Admin navbar</a>
                <h5>{navTitle}</h5>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                     aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <div className="nav-link" aria-current="page"
                                     onClick={()=>{
                                         setDataSelection("reservation")
                                         setNavTitle("Reservation")
                                     }}
                                >
                                    Reservation
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" aria-current="page"
                                     onClick={()=>{
                                         setDataSelection("CheckIn")
                                         setNavTitle("CheckIn")
                                     }}
                                >
                                    CheckIn
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" aria-current="page"
                                     onClick={()=>{
                                         setDataSelection("CheckOut")
                                         setNavTitle("CheckOut")
                                     }}
                                >
                                    CheckOut
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" aria-current="page"
                                     onClick={()=>{
                                         setDataSelection("CFMessages")
                                         setNavTitle("CFMessages")
                                     }}
                                >
                                    Contact Form Messages
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"></hr>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );

}

export default AdminNavbar;