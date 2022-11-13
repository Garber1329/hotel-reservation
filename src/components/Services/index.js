import React from 'react';
import {baseUrl} from "../../store/baseUrl";

function Services({services, SelectServices}){

    return <div>
        {
            services.length > 0 ?
                (
                    <div>
                        {services.map((serv, index) => {
                                return (
                                    <div className="card mb-3" key={index}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={baseUrl+serv.photo} className="img-fluid rounded-start" alt="..."></img>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{serv.name}</h5>
                                                    <p className="card-text">{serv.desc}</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="card-text"><small className="text-muted">Capacity: {serv.capacity}</small></p>
                                                        <div className="btn btn-primary"
                                                             onClick={()=> {SelectServices(serv)}}
                                                        >
                                                            <h5 className="card-text">{serv.price}$</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                )
                :
                (<div>There are no services</div>)
        }
    </div>

}

export default Services;