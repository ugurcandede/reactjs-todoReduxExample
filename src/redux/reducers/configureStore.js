import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from ".";

export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
