import initialState from './initialState';
import * as types from '../constants/actionTypes';

// Handles passengers related actions.
// The idea is to return an updated copy of the state depending on the action type.

/*
    create-react-app comes preinstalled with babel-plugin-transform-object-rest-spread that lets you use the spread (…)
    operator to copy enumerable properties from one object to another in a succinct way.
*/
export default function (state = initialState.catalog, action) {
    switch (action.type) {
        case types.LOAD_PASSENGERS_SUCCESS:
            return {...state, passengers: action.passengers };
        case types.CLICKED_NEW:
            return { ...state, clickedNew: true };
        case types.CLEAR_CLICKED_NEW:
            return { ...state, clickedNew: null };
        case types.NEW_PASSENGER_SUCCESS:
            return {...state, newPassenger: action.passenger };
        default:
            return state;
    }
}