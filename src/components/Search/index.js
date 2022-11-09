import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

function Search(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="reservation-search d-flex justify-content-around align-items-center">
                        <div className="div">
                            <h4>Check In:</h4>
                            <DatePicker
                                dateFormat='dd/MM/yyyy'
                                selected={props.checkIn}
                                onChange={(date) => props.setCheckIn(date)} />

                        </div>
                        <div className="div">
                            <h4>Check Out:</h4>
                            <DatePicker
                                dateFormat='dd/MM/yyyy'
                                selected={props.checkOut}
                                onChange={(date) => props.setCheckOut(date)} />
                        </div>
                        <div className="div">
                            <h4>Adults:</h4>
                            <select className="form-select" aria-label="Default select example" onChange={event => props.setAdults(event.target.value)}>
                                <option selected value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>
                        {/*<div className="div">
                        <h4>Children:</h4>
                        <select className="form-select" aria-label="Default select example" onChange={event => props.setChildren(event.target.value)}>
                            <option selected value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;