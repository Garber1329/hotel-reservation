import * as ActionTypes from './actionTypes';
import {baseUrl} from "./baseUrl";

/**.......... Rooms ............................ */

export const fetchRooms = () => (dispatch) => {

    dispatch(roomsLoading(true));

    return fetch(baseUrl + 'rooms')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(rooms => dispatch(addRooms(rooms)))
        .catch(error => dispatch(roomsFailed(error.message)));
}

export const roomsLoading = () => ({
    type: ActionTypes.ROOMS_LOADING
});

export const roomsFailed = (errmess) => ({
    type: ActionTypes.ROOMS_FAILED,
    payload: errmess
});

export const addRooms = (rooms) => ({
    type: ActionTypes.ADD_ROOMS,
    payload: rooms
});

/**.......... All Reservation ............................ */

export const fetchReservation = () => (dispatch) => {
    return fetch(baseUrl + 'reservation')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(reservation => dispatch(addAllReservation(reservation)))
        .catch(error => dispatch(reservationFailed(error.message)));
};

export const reservationFailed = (errmess) => ({
    type: ActionTypes.ALL_RESERVATION_FAILED,
    payload: errmess
});

export const addAllReservation = (reservation) => ({
    type: ActionTypes.ADD_ALL_RESERVATION,
    payload: reservation
});

/**.......... Post Reservation ............................ */

export const addReservation = (reservation) => ({
    type: ActionTypes.POST_RESERVATION,
    payload: reservation
});

export const postReservation = (newReservation) => (dispatch) => {

    /*const newReservation = {
        /!*id_room: chatId,
        date_reservation: new Date().toISOString(),
        check_in_date: ,
        check_out_date: ,
        first_name: ,
        last_name: ,
        email: ,
        phone: ,
        special_request: ,
        total_price:*!/
    };*/

    return fetch(baseUrl + 'reservation', {
        method: "POST",
        body: JSON.stringify(newReservation),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(addReservation(response)))
        .catch(error => {
            console.log('post reservation', error.message);
            alert('Your reservation could not be posted\nError: ' + error.message);
        });
};

/**.......... All CFMessages ............................ */

export const fetchCFMessages = () => (dispatch) => {
    return fetch(baseUrl + 'messages')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(messages => dispatch(addCFMessages(messages)))
        .catch(error => dispatch(cfMessagesFailed(error.message)));
};

export const cfMessagesFailed = (errmess) => ({
    type: ActionTypes.CONTACT_FORM_FAILED,
    payload: errmess
});

export const addCFMessages = (messages) => ({
    type: ActionTypes.ADD_CONTACT_FORM,
    payload: messages
});

/**.......... Post Reservation ............................ */

export const addCFMessage = (message) => ({
    type: ActionTypes.POST_CONTACT_FORM,
    payload: message
});

export const postCFMessage = (name, email, message) => (dispatch) => {

    const newCFMessages = {
        date: new Date().toISOString(),
        name: name,
        email: email,
        messages: message
    };

    return fetch(baseUrl + 'messages', {
        method: "POST",
        body: JSON.stringify(newCFMessages),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(addCFMessage(response)))
        .catch(error => {
            console.log('post CFMessages', error.message);
            alert('Your messages could not be posted\nError: ' + error.message);
        });
};

/**.......... Services ............................ */

export const fetchServices = () => (dispatch) => {

    dispatch(servicesLoading(true));

    return fetch(baseUrl + 'services')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(services => dispatch(addServices(services)))
        .catch(error => dispatch(servicesFailed(error.message)));
}

export const servicesLoading = () => ({
    type: ActionTypes.SERVICES_LOADING
});

export const servicesFailed = (errmess) => ({
    type: ActionTypes.SERVICES_FAILED,
    payload: errmess
});

export const addServices = (services) => ({
    type: ActionTypes.ADD_SERVICES,
    payload: services
});