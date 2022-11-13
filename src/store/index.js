import {applyMiddleware, combineReducers, createStore} from "redux";
import {Rooms} from "./roomsReducer";
import {Reservation} from "./reservationReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {CFMessages} from "./contactFormReducer";
import {Services} from "./servicesReducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    reservation: Reservation,
    rooms: Rooms,
    messages: CFMessages,
    services: Services
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));