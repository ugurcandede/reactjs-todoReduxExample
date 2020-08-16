import * as actionTypes from "./actionTypes";

export const changeCategory = (cat) => {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: cat,
  };
};

export const getCategoriesSuccess = (cat) => {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: cat,
  };
};

export function getCategories() {
  return function (dispatch) {
    let url = "http://localhost:2500/categories";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}
