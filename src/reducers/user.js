import { SET_USER } from '../actions'

const initialState = {
    username: "Hello World"
}

export default function(state = initialState, action) {
    if (action.type === SET_USER) {
        return { username: action.user }
    }
    return state
}