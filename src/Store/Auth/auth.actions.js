import axios from "axios";
import * as Types from "./auth_types";

import * as gConsts from "../../Constants/constants";
import {AUTH_LOADING} from "./auth_types";
// import {getUserData} from "./user.actions";
import Cookies from "js-cookie";

const saveTokenToLocalStorage = (token, user) => {
    Cookies.set(
        "AUTH",
        JSON.stringify({
            user: user,
            token: token,
        })
    );
    window.localStorage.setItem("USER_Token", token);
};

var d = new Date();
d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
var expires = "expires=" + d.toUTCString();

export const loginUser = (userData, history, checked) => (dispatch) => {
    dispatch({type: Types.AUTH_LOADING});
    dispatch({
        type: Types.SET_AUTHENTICATED,
        payload: {}
    });
    history.push("/");

    // axios
    //     .post(gConsts.API_ROOT + "users/login", userData)
    //     .then((res) => {
    //         axios.defaults.headers.common['Authorization'] = res.data.token;
    //         if (checked === true) {
    //             saveTokenToLocalStorage(res.data.token, res.data.user);
    //         }
    //         dispatch({
    //             type: Types.SET_AUTHENTICATED,
    //             payload: res.data.user
    //         });
    //         if (res.data.user.role === "Admin") history.push("/admin")
    //         else
    //             // else if (response.data.user.role === "User")
    //             history.push("/");
    //     })
    //     .catch((err) => {
    //         // console.log(err.response, "errrrrr")
    //         dispatch({
    //             type: Types.SET_AUTH_ERROR,
    //             // payload: err.response.Data
    //         });
    //     });
};

export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({type: AUTH_LOADING});
    axios
        .post(gConsts.API_ROOT +'users/signup', newUserData)
        .then((res) => {
            axios.defaults.headers.common['Authorization'] = res.data.token;
            saveTokenToLocalStorage(res.data.token, res.data.user);
            // document.cookie = `token=${res.data.token};${expires};path=/`;

            dispatch({
                type: Types.SET_AUTHENTICATED,
                payload: res.data.user
            });

            if (res.data.user.role === "Admin") history.push("/admin")
            else
            // else if (response.data.user.role === "User")
                history.push("/");

        })
        .catch((err) => {
            console.log(err.response.data, "errrrrssr")
            dispatch({
                type: Types.SET_AUTH_ERROR,
                // payload: err.response.Data
            });
        });
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("USER_Token");
    delete axios.defaults.headers.common['Authorization'];
    dispatch({type: Types.LOGGED_OUT});
};