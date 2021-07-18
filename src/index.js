import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import "antd/dist/antd.css";

import { fetchCurrentPageGenres } from './Store/Genres/store/genres.functions'
import { fetchCurrentPageCategories } from './Store/Category/store/functions'
import {fetchFilteredLatestFromApi} from "./Store/IndexPage/itemsLatest/store/functions";
import {fetchCurrent_Best_Page} from "./Store/IndexPage/itemsBest/store/functions";
import {fetchFilteredFromApi} from "./App/views/Admin/items/store/items_repo";
import { fetchCurrentPageGroups } from './Store/Groups/store/functions'


import App from './App';
import Store from './Store/store'
import Cookies from "js-cookie";
// import './Index.css';

import * as serviceWorker from './serviceWorker';


import {logoutUser} from "./Store/Auth/auth.actions";
import * as Types from "./Store/Auth/auth_types";

const token = window.localStorage.getItem("USER_Token");
const authCookies = Cookies.get("AUTH") || JSON.stringify({});

if (authCookies) {
    console.log("decoded",authCookies)
    Store.dispatch({
        type: Types.SET_AUTHENTICATED,
        payload: authCookies.user
    });
    // const decodedToken = jwtDecode(token);

    // if (decodedToken.exp * 1000 < Date.now()) {
    //     Store.dispatch(logoutUser());
    //     window.location.href = '/login';
    // }

}else {
    console.log("noToken",token)
    // Store.dispatch(logoutUser());
    // axios.defaults.headers.common['Authorization'] = token;
    // Store.dispatch(getUserData());
}

Store.dispatch(fetchFilteredFromApi())

// Store.dispatch(fetchCurrentPageGenres())
// Store.dispatch(fetchCurrentPageCategories())

// Store.dispatch(fetchCurrent_Best_Page())
// Store.dispatch(fetchFilteredLatestFromApi())


// Store.dispatch(fetchCurrentPageGroups())
// console.log("Store-Dispatched-",Store)

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={Store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
