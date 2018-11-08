import * as types from '../constants/actionTypes';

import { fetchPassengers, createPassenger } from '../api/api';

// Returns an action type, LOAD_PASSENGERS_SUCCESS and retrieved passengers.
export const loadPassengersSuccessAction = (passengers) => ({
    type: types.LOAD_PASSENGERS_SUCCESS,
    passengers
});

export function loadPassengers() {
  return function(dispatch) {
    return  fetchPassengers().then(passengers => {
      dispatch(loadPassengersSuccessAction(passengers));
    }).catch(error => {
      throw(error);
    });
  };
}

// Returns an action type, CLICKED_NEW.
export const clickedNewAction = () => ({
  type: types.CLICKED_NEW,
});

// Returns an action type, CLEAR_CLICKED_NEW.
export const clearClickedNewAction = () => ({
  type: types.CLEAR_CLICKED_NEW,
});

// Returns an action type, LOAD_PASSENGERS_SUCCESS and retrieved passengers.
export const newPassengerSuccessAction = (passenger) => ({
  type: types.LOAD_PASSENGERS_SUCCESS,
  passenger
});

export function newPassenger(data) {
return function(dispatch) {
  return createPassenger(data).then(passenger => {
    dispatch(newPassengerSuccessAction(passenger));
  }).catch(error => {
    throw(error);
  });
};
}