import { combineReducers } from "redux";

import todoListReducer from "./todoListReducer";
import saveTodoReducer from "./saveTodoReducer";
import categoryListReducer from "./categoryListReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  todoListReducer,
  saveTodoReducer,
  categoryListReducer,
  changeCategoryReducer,
  themeReducer,
});

export default rootReducer;
