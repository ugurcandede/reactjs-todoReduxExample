import { combineReducers } from 'redux'

import todoListReducer from './todoListReducer'
import saveTodoReducer from './saveTodoReducer'
import categoryListReducer from './categoryListReducer'
import changeCategoryReducer from './changeCategoryReducer'

const rootReducer = combineReducers({
    todoListReducer,
    saveTodoReducer,
    categoryListReducer,
    changeCategoryReducer

})

export default rootReducer