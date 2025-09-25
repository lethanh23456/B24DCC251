// reducers/counterReducer.js
import {DECREMENT, INCREMENT, NHANDOI} from "../Action/actionTypes";

export const counterInitial = {count: 0};

export function counterReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1};
    case DECREMENT:
      return {...state, count: state.count - 1};
    case NHANDOI:
      return {...state, count: state.count * 2};
    default:
      return state;
  }
}
