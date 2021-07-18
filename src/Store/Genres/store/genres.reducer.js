import {combineReducers} from "redux";



import * as types from "./genres.types";
import {Status, Query} from "../../store.types";

//T- types
//N- Name of function
//A- action
//F - field

//O
const initPages={
    allIds:[]
}

//T
//Store the ids of the views & the allIds field
const pages = (state=initPages, action) => {
    switch (action.type) {
        case types.RECEIVED_MANY:
            return {
                ...state,
                allIds: [...state.allIds, ...action.items.map(item => item.id)],
                [action.pageNo]: page(state[action.page], action),
            }
        case types.INVALIDATE_ALL:
            return initPages
        default:
            return state
    }
}

//T
//is single page
const page = (state = {
    isFetching: false,
    didInvalidate: false,
    ids: []
}, action) => {
    switch (action.type) {
        case types.INVALIDATE_ALL:
            return {
                isFetching: false,
                didInvalidate: true,
            }
        case types.FETCHING:
            return {
                isFetching: true
            }
        case types.RECEIVED_MANY:
            return {
                ...state,
                ids: action.items.map(item => item.id),
                isFetching: false,
                didInvalidate: false,
            }
        default:
            return state
    }
};

//T
// This Selected Page the user Sees & is a number
const filter = (state= {
    selectedPage : 1,
    haveNextPage:true,
    havePreviousPage: false
}, action) => {
    switch (action.type) {
        case types.RECEIVED_MANY:
            return {
                ...state,
                selectedPage: action.pageNo
            };
        case types.PREVIOUS_PAGE:
            return {
                ...state,
                haveNextPage: true,
                selectedPage: action.pageNo
            }
        case types.NEXT_PAGE:
            return {
                ...state,
                havePreviousPage: true,
                selectedPage: action.pageNo
            }
        case types.LAST_PAGE_REACHED:
            return {
                ...state,
                haveNextPage: false
            }
        case types.FIRST_PAGE_REACHED:
            return {
                ...state,
                havePreviousPage: false
            }
        default:
            return state
    }
}

//TNA
//this is items sorted by id
const itemsById = (state = {}, action) => {
    switch (action.type) {
        case types.RECEIVED_MANY:
            return {
                ...state,
                ...action.items.reduce((obj, item) => {
                    obj[item.id] = item;
                    return obj
                }, {})
                // ...action.item
            };
        case types.UPDATE_SUCCESS:
            return {
                ...state,
                [action.item.id]:action.item
            }
        //    FIXME maybe find another way
        case types.INVALIDATE_ALL:
            return {}
        default:
            const {id } = action;
            if (id) {
                return {
                    ...state,
                    [id]: selectedItem(state[id], action)
                }
            }
            return state
    }
};

//TNA
const selectedItem = (state={}, action)=>{
    switch (action.type) {
        case types.SELECT_ITEM:
        case types.SINGLE_RECEIVED:
            return action.item
        default:
            return state
    }
}


//O
const initialStatus = {
    loadStatus:Status.NORMAL,
    uploadStatus:Status.NORMAL,
    queryType:Query.LOAD,
    errors: {},
    showNotification:false
}

//T
const status = (state = initialStatus, action) => {
    switch (action.type) {
        //loading
        case types.FETCHING:
            return {
                ...state,
                loadStatus: Status.LOADING,
                queryType: Query.LOAD
            }
        case types.UPLOADING:
            return {
                ...state,
                uploadStatus: Status.LOADING,
                queryType: Query.CREATE
            }
        //    SUCCESS
        case types.RECEIVED_MANY:
            return {
                ...state,
                loadStatus: Status.SUCCESS,
                queryType: Query.LOAD
            }
        case types.UPLOAD_SUCCESS:
            return {
                ...state,
                uploadStatus: Status.SUCCESS,
                queryType: Query.CREATE
            }
        case types.UPDATE_SUCCESS:
            return {
                ...state,
                uploadStatus: Status.SUCCESS,
                queryType: Query.UPDATE
            }
        case types.DELETE_SUCCESS:
            return {
                ...state,
                uploadStatus: Status.SUCCESS,
                queryType: Query.DELETE
            }
        //    Errors
        case types.FETCH_ERROR:
            return {
                ...state,
                loadStatus: Status.ERROR,
                queryType: Query.LOAD
            }
        case types.UPLOAD_ERROR:
            return {
                ...state,
                uploadStatus: Status.ERROR,
                queryType: Query.CREATE
            }
        case types.UPDATE_ERROR:
            return {
                ...state,
                uploadStatus: Status.ERROR,
                queryType: Query.UPDATE
            }
        case types.DELETE_ERROR:
            return {
                ...state,
                uploadStatus: Status.ERROR,
                queryType: Query.DELETE,
                errors: action.error
            }
        default:
            return state
    }
};

// This is the components
export default combineReducers({
    status,
    itemsById,
    pages,
    filter,
    selectedItem

})

