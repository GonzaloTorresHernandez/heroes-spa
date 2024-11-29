import { types } from "../types/types";

export const authReducer =  (state = {}, action) => {

    /**
     * el reducer no debe llamar funciones externas
     *  no llamar el local storage
     */

    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };
            break;

        case types.logout:
            return {
                logged: false
            };
            break;

        default:
            return state
            break;
    }
}