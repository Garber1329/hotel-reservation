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