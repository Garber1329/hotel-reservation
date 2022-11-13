import React from 'react';
import "./index.scss"

function ShowCFMessages({messages}){

    return (
        <div className="show-reservation show-cf-messages">
            {
                messages.length > 0 ? (
                        <ul className="list-group">
                            <li className="list-group-item active d-flex" aria-current="true">
                                <div>id</div>
                                <div>date</div>
                                <div>name</div>
                                <div>email</div>
                                <div>messages</div>
                            </li>
                            {
                                messages.map((mes, index) => {
                                        return(
                                            <li className="list-group-item d-flex" aria-current="true" key={index}>
                                                {/*setCountReservation(index+1)*/}
                                                <div>{mes.id}</div>
                                                <div>
                                                    {new Intl.DateTimeFormat('en-GB', {
                                                        year: 'numeric',
                                                        month: 'numeric',
                                                        day: 'numeric',
                                                        hour: "2-digit",
                                                        minute: "numeric"
                                                    }).format(new Date(mes.date))}
                                                </div>
                                                <div>{mes.name}</div>
                                                <div>{mes.email}</div>
                                                <div>{mes.messages}</div>
                                            </li>
                                        )
                                    }
                                )}
                        </ul>
                    )
                    :
                    (
                        <div>There are no messages</div>
                    )

            }
        </div>
    );
}

export default ShowCFMessages;