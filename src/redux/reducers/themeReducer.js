import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const themeReducer = (state = initialState.theme, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
