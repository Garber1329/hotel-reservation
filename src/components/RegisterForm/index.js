import React from 'react';

function RegisterForm(
    {firsName, setFirstName, lastName, setLastName,
        telephone, setTelephone, email, setEmail,
        specialRequest, setSpecialRequest})  {
        return (
            <div className="">
                <h4 className="mb-3">Register Form</h4>
                <form className="needs-validation" noValidate="">
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">First name</label>
                            <input type="text" className="form-control" id="firstName"
                                   required=""
                                   value ={firsName}
                                   onChange={e => setFirstName(e.target.value)}
                            ></input>
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="lastName"
                                   required=""
                                   value={lastName}
                                   onChange={e => setLastName(e.target.value)}></input>
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="phone" className="form-label">Telephone number</label>
                            <div className="input-group has-validation">
                            <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone"
                                   required="" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                   value={telephone}
                                   onChange={e => setTelephone(e.target.value)}></input>
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="email" className="form-label">Email <span
                                className="text-muted">(Optional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com"
                                   value={email}
                                   onChange={e => setEmail(e.target.value)}></input>
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="special_request" className="form-label">Special request</label>
                            <textarea className="form-control" id="special_request" rows="3"
                                      value={specialRequest}
                                      onChange={e => setSpecialRequest(e.target.value)}></textarea>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

export default RegisterForm;