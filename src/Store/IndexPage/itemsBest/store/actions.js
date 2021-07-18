import * as types from "./types";

import * as Functions from "./functions";

// 
// after receiving Group

export const receivedMany = (items, pageNo) => ({
    type: types.RECEIVED_MANY,
    items,
    pageNo,
    receivedAt:Date.now()
})

// NTF
// after receiving Group
export const receivedSingle = (item) => ({
    type: types.SINGLE_RECEIVED,
    item,
    receivedAt:Date.now()
})

//NF
export const update = (item) => ({
    type: types.UPDATE_SUCCESS,
    item: item,
    receivedAt:Date.now()
})
//N
export const setPage = (type, pageNo) => ({
    type:type,
   pageNo,
});

export const InvalidateAndFetch =()=> (dispatch) => {
    dispatch({type: types.INVALIDATE_ALL});
    return dispatch(Functions.fetchCurrent_Best_Page());
};

//=================================Errors =====================

export const fetchERROR = (err) => ({
    type: types.FETCH_ERROR,
    error: err.response
})
export const createERROR = (err) => ({
    type: types.UPLOAD_ERROR,
    error: err.response
})
export const updateERROR = (err) => ({
    type: types.UPDATE_ERROR,
    error: err.response
})
export const deleteERROR = (err) => ({
    type: types.DELETE_ERROR,
    error: err.response
})

