import * as ActionTypes from './actionTypes';

export const Reservation = (state = {errMess: null, reservation: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ALL_RESERVATION:
            return {...state, errMess: null, reservation: action.payload};

        case ActionTypes.ALL_RESERVATION_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.POST_RESERVATION:
            let reservation = action.payload;
            return {...state, reservation: state.reservation.concat(reservation)};

        default:
            return state;
    }
};