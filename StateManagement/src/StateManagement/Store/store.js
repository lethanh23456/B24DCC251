import {createContext, useContext, useReducer} from "react";
import {combineReducers} from "../Reducer/combineReducers";
import {counterInitial, counterReducer} from "../Reducer/counterReducer";
import {userInitial, userReducer} from "../Reducer/userReducer";
import {todoInitial, todoReducer} from "../Reducer/todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  todo: todoReducer,
});

const initialState = {
  counter: counterInitial,
  user: userInitial,
  todo: todoInitial,
};

const StoreContext = createContext(null);

export function StoreProvider({children}) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}