import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function (state = initialState.saveTodo, action) {
  switch (action.type) {
    case actionTypes.UPDATE_TODO_SUCCESS:
      return action.type;
    case actionTypes.CREATE_TODO_SUCCESS:
      return action.type;
    case actionTypes.REMOVE_TODO_SUCCESS:
      return action.type;
    default:
      return state;
  }
}
