import { types } from "../types/types";

export const authReducer = (initialState = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...initialState,
                logged: true,
                user: action.payload
            }

        case types.logout:
            return {
                logged: false,
            }

        default:
            return initialState
    }
}