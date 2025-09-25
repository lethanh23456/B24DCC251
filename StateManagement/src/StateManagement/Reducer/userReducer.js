// reducers/userReducer.js
import {SET_USER} from "../Action/actionTypes";

export const userInitial = {name: "Guest"};

export function userReducer(state, action) {
  switch (action.type) {
    case SET_USER:
      return {...state, name: action.payload};
    default:
      return state;
  }
}
