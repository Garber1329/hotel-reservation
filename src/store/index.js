import {applyMiddleware, combineReducers, createStore} from "redux";
import {Rooms} from "./roomsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    rooms: Rooms,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));