import {DECREMENT, INCREMENT, NHANDOI, SET_USER, ADD_TODO, DELETE_TODO} from "./actionTypes";

export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});
export const nhandoi = () => ({type: NHANDOI});
export const setUser = (name) => ({type: SET_USER, payload: name});
export const addTodo = (task) => ({type: ADD_TODO, payload: task});
export const deleteTodo = (index) => ({type: DELETE_TODO, payload: index});