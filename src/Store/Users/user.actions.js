import axios from 'axios';
import * as Types from './user.types';


export const getUserData = () => (dispatch) => {
    dispatch({ type: Types.LOADING_USER });
    axios
        .get('/user')
        .then((res) => {
            dispatch({
                type: Types.SET_USER,
                payload: res.data
            });
        })
        .catch((err) => console.log(err));
};

export const uploadImage = (formData) => (dispatch) => {
    dispatch({ type: Types.LOADING_USER });
    axios
        .post('/user/image', formData)
        .then(() => {
            dispatch(getUserData());
        })
        .catch((err) => console.log(err));
};

export const editUserDetails = (userDetails) => (dispatch) => {
    dispatch({ type: Types.LOADING_USER });
    axios
        .post('/user', userDetails)
        .then(() => {
            dispatch(getUserData());
        })
        .catch((err) => console.log(err));
};

