import * as ActionTypes from './actionTypes';

export const CFMessages = (state = {errMess: null, messages: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CONTACT_FORM:
            return {...state, errMess: null, messages: action.payload};

        case ActionTypes.CONTACT_FORM_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.POST_CONTACT_FORM:
            let reservation = action.payload;
            return {...state, messages: state.messages.concat(reservation)};

        default:
            return state;
    }
};