import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function todoListReducer(state = initialState.todos, action) {
    switch (action.type) {
        case actionTypes.GET_TODOS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}

