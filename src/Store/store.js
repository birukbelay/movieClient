import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'

import items from "../App/views/Admin/items/store/item_reducer"
import landing from "./IndexPage/index.reducer";
import user from './Users/user.reducer'
import auth from './Auth/auth_reducers'


const initialState = {};

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const reducers = combineReducers({
  auth,
  user,
  items,
  landing,
});

const Store = createStore(reducers, initialState, enhancer);

export default Store;




