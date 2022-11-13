import React from 'react';

function About({postCFMessage}) {

    function SendForm(event){
        event.preventDefault();
        postCFMessage(event.target[0].value, event.target[1].value, event.target[2].value);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5145.671247943762!2d24.0263910531764!3d49.84554603151425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add72f9bc6a89%3A0xf9783fecb4fecf1f!2z0JvRjNCy0ZbQstGB0YzQutCwINCd0LDRhtGW0L7QvdCw0LvRjNC90LAg0J7Qv9C10YDQsA!5e0!3m2!1suk!2sua!4v1668334343698!5m2!1suk!2sua"
                        allowFullScreen="" loading="lazy" style={{width: "100%", height: "100%" }}
                        referrerPolicy="no-referrer-when-downgrade" title="maps"></iframe>
                </div>
                <div className="col-4">
                    <table className="table table-primary table table-bordered">
                        <thead className="thead">
                            <th>Day</th>
                            <th>Hours</th>
                        </thead>
                        <tbody className="table table-primary ">
                        <tr>
                            <td>Monday</td>
                            <td>7:00 - 23:00</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>7:00 - 23:00</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>7:00 - 23:00</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>7:00 - 23:00</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>7:00 - 23:00</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>7:00 - 23:00</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>7:00 - 23:00</td>
                        </tr>
                        <tr>
                            <td className="table-light" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td rowSpan="2">Telephone number</td>
                            <td>(063) 729-0733</td>
                        </tr>
                        <tr>
                            <td>(095) 729-0733</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <form onSubmit={event => SendForm(event)}>
                        <h3 className="mb-3 mt-5">Contact form</h3>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">First and Last name</label>
                            <input type="text" className="form-control" id="Name"
                                   placeholder="Name"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="Email"
                                   placeholder="name@example.com"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Textarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="Textarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary mb-3 ms-auto">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default About;