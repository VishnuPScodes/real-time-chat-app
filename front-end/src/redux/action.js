


export const loginActions = {
    ADD_USERID: "ADD_USERID"
}


export const addUserId = (payload) => {
    return {
        type: loginActions.ADD_USERID,
        payload
    }
}
