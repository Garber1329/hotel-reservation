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