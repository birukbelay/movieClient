import * as Types from './user.types';
//

const initialState = {
    authenticated: false,
    isAdmin:false,
    error:true,
    loading: false,

    credentials: {},
    likes: [],
    notifications: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case Types.SET_USER:
            return {
                ...state,
                authenticated: true,
                loading: false,
                credentials:action.payload
            };
        case Types.LOADING_USER:
            return {
                ...state,
                loading: true
            };


        case Types.LIKE_MOVIE:
            return {
                ...state,
                likes: [
                    ...state.likes,
                    action.movie
                ]
            };
        case Types.UNLIKE_MOVIE:
            return {
                ...state,
                likes: state.likes.filter(
                    (like) => like.id !== action.payload.id
                )
            };
        default:
            return state;
    }
}
