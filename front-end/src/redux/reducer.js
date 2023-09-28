import { loginActions } from "./action"




const initState = {
    token: '',
    userId: '',
    auth: false,
}

export const appReducer = (state = initState, action) => {
    switch (action.type) {
        case loginActions.ADD_USERID: {
            return {
                ...state,
                userId: action.payload,
                auth: true
            }
        }
        default:
            return state
    }
}