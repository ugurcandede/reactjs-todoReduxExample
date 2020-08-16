import * as actionTypes from "./actionTypes";

export const switchTheme = (theme) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SWITCH_THEME,
      payload: theme,
    });
  };
};
