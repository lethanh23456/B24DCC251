import {ADD_TODO, DELETE_TODO} from "../Action/actionTypes";

export const todoInitial = {
  tasks: []
};

export function todoReducer(state = todoInitial, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload)
      };
    default:
      return state;
  }
}
