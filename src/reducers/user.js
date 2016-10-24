import { SET_USER } from '../actions/user'

const initialState = {
    username: "Hello World"
}

export default function(state = initialState, action) {
    if (action.type === SET_USER) {
        return Object.assign({}, state, { username: action.username })
    }
    return state
}