import * as types from "./Types";

import * as API from "./api/item.api";

import * as ACTIONS from "./actions";
import * as Helpers from "./allConfig/configItems.selectors";
import {getFilter} from "./selector";
import {ConfigProductsLimit} from "../../../../Constants/constants";

// Called by ui Gets current configs items directly not form cash
export const fetchFilteredLatestFromApi=()=>(dispatch, getState) =>{
    const filter = getFilter(getState());
    const configId=filter.id
    const pageNo=filter.selectedPage
    dispatch(fetchFiltered(configId, pageNo, "", "", filter))
}
// setPage  is called by the ui; Increases, decreases Page & calls fetchProductsIfNeeded
export const fetchIfNeeded = (configId, pageNo, grouPId, type, filter) => (dispatch, getState) => {
    if (Helpers.shouldFetchProducts(getState(), configId, pageNo)) {
        return dispatch(fetchFiltered(configId, pageNo, grouPId, type, filter))
    } else {
        ///Used For setting views & setting the filter
        ///if type is --> nextPage it dispatches nextPage with pageNo as id
        dispatch(ACTIONS.editFilter(grouPId, type));
        return dispatch(ACTIONS.changeConfigId(configId))
    }
};

export const fetchFiltered = (configId, pageNo, groupId, type, oldFilter) => async (dispatch, getState) => {
    dispatch(ACTIONS.requestPageItems(configId, pageNo));
    const filter = getFilter(getState());
    try {
        const response = await API.ApiGetFiltered(filter, pageNo)
        if (response.items == null) {
            dispatch({type: types.LAST_PAGE_REACHED});
            dispatch(ACTIONS.changeConfigId(configId))
            return
        }
        //this is hat changes the config id
        // this sets also the  -->  Page/GroupId no & type -> mainly for setting nextPage id &
        //for items that dont have type there is no problem because it wont cause any
        dispatch(ACTIONS.editFilter(groupId, type));
        if (response.items.length < ConfigProductsLimit) {
            dispatch({type: types.LAST_PAGE_REACHED})
        }
        dispatch(ACTIONS.fetchManySuccess(configId, pageNo, response.items))
    } catch (e) {
        dispatch(ACTIONS.fetchERROR(e));
        dispatch(ACTIONS.resetFilter(oldFilter));
    }
};

export const paginateItems = (type) => (dispatch, getState) => {
    const filter = getFilter(getState());
    let page = filter.selectedPage;
    switch (type) {
        case types.NEXT_PAGE:
            page++;
            break;
        case types.PREVIOUS_PAGE:
            if (type === types.PREVIOUS_PAGE && page <= 2) {
                page = 1;
                dispatch({type: types.FIRST_PAGE_REACHED});
                break;
            }
            page--;
            break;
        default:
            page = filter.selectedPage
    }
    const ConfigId = filter.id;
    //this uses the page as id because it dispatches it with the type and the payload will be the page
    return dispatch(fetchIfNeeded(ConfigId, page, page, type, filter))

};


export const fetchSingleItem = (item) => async (dispatch) => {
    dispatch({type: types.ITEM_REQUEST_SINGLE,});
    try {
        const response = await API.ApiGetSingle(item.id)
        if (response == null) {
            return
        }
        dispatch(ACTIONS.receivedSingle(response))
    } catch (e) {
        dispatch(ACTIONS.fetchERROR(e));
    }
};

export const CreateItem = (formData) => async (dispatch) => {
    dispatch({type: types.UPLOADING});
    try {
        const res = await API.ApiCreate(formData)
        dispatch(ACTIONS.CreateSuccess(res));
        dispatch({type: types.INVALIDATE_MAIN_CONFIG});
        dispatch(fetchFilteredLatestFromApi());
        // return true
    } catch (err) {
        dispatch(ACTIONS.createERROR(err));
    }
};
export const updateItem = (formData, id) => async (dispatch) => {
    dispatch({type: types.UPLOADING});
    try {
        const res = await API.ApiUpdate(formData, id)
        dispatch(ACTIONS.UpdateSuccess(res));
    } catch (err) {
        dispatch(ACTIONS.updateERROR(err));
    }
};
export const deleteItem = (id) => async (dispatch) => {
    dispatch({type: types.UPLOADING});
    try {
        const res = await API.ApiDelete(id)
        dispatch(ACTIONS.DeleteSuccess(res));
        dispatch({type: types.INVALIDATE_MAIN_CONFIG});
        dispatch(fetchFilteredLatestFromApi());
    } catch (err) {
        dispatch(ACTIONS.deleteERROR(err));
    }
};

