import * as Types from './auth_types';
import {Status} from '../store.types'



const initialState = {
    authenticated: false,
    isAdmin:false,
    status:Status.NORMAL,
    credentials: {},

};

export default function(state = initialState, action) {
    switch (action.type) {
        case Types.SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true,
                credentials:action.payload,
                status: Status.SUCCESS
            };
        case Types.SET_AUTH_ERROR:
            return {
                ...state,
                status: Status.ERROR
            };
         case Types.AUTH_LOADING:
            return {
                ...state,
                status: Status.LOADING
            };

        case Types.LOGGED_OUT:
            return initialState;



        default:
            return state;
    }
}
