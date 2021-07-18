import * as types from "./item_types";

export const selectItem = (item) => ({
    type: types.SELECT_ITEM,
    item,
});

//selectConfig is an action called to modify the filter components,
///it could be setting the nextPage or
export const editFilter = (id, type) => ({
    type: type,
    id,
});

export const changeConfigId = (configId) => ({
    type: types.SET_CONFIG_ID,
    configId,
});

export const invalidateConfig = (configId, pageNo) => ({
    type: types.INVALIDATE_PAGE_CONFIG,
    configId,
    pageNo
})


//it sets the filter
export const requestPageItems = (configId, pageNo) => ({
    type: types.REQUEST_PAGE,
    configId,
    pageNo
});
//----------------------------------------------------------------
export const receivedSingle = (item) => ({
    type: types.ITEM_FETCH_SUCCESS,
    item,
});

// after recieving products
export const fetchManySuccess = (configId, pageNo, items) => ({
    type: types.FETCH_SUCCESS,
    configId,
    pageNo,
    items,
    recievedAt: Date.now()
});

export const UpdateSuccess = (item) => ({
    type: types.UPDATE_SUCCESS,
    item: item,
    receivedAt:Date.now()
})

export const CreateSuccess = (item) => ({
    type: types.UPLOAD_SUCCESS,
    item: item,
    receivedAt:Date.now()
})
export const DeleteSuccess = (item) => ({
    type: types.DELETE_SUCCESS,
    item: item,
    receivedAt:Date.now()
})


export const resetFilter = (oldFilter) => ({
    type: types.RESET_FILTER,
    oldFilter
})
//=============Errors=======================================

export const fetchERROR = (err) => ({
    type: types.ITEMS_LOAD_ERROR,
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

