import * as types from './item_types'
import * as Helpers from "./allConfig/configItems.selectors";

import* as Actions from "./item_actions";
import {fetchIfNeeded} from "./items_repo";
import {getFilter} from "./item_selector";

//


export const setCurrentFilter = (groupId, type, pageNo) => (dispatch, getState) => {
    // this  will save the filter before it is edited
    const filter = getFilter(getState());
    //this will edit the filter for api function
    dispatch(Actions.editFilter(groupId, type));
    //this must come after edit filter so that  ChangeConfigId to work
    const ConfigId = Helpers.getConfigId(getState(), type, groupId);
    return dispatch(fetchIfNeeded(ConfigId, pageNo, groupId, type, filter))
};

//===================================SetFilter================
//Called by the ui; updates the selected config;  calls `fetchProductsIfNeeded`
export const setGeneralFilter = (groupId, type, pageNo) => (dispatch, getState) => {
    const ConfigId = Helpers.getConfigId(getState(), type, groupId);
    const filter = getFilter(getState());
    //this is for the api function
    dispatch(Actions.editFilter(groupId, type));
    return dispatch(fetchIfNeeded(ConfigId, pageNo, groupId, type, filter))
};//Called by the ui; updates the selected config;  calls `fetchProductsIfNeeded`


//Called by the ui; updates the selected config;  calls `fetchProductsIfNeeded`
export const setGenres = (groupId) => (dispatch, getState) => {
    const ConfigId = Helpers.getConfigId(getState(), types.ConfigT.GENRE, groupId);
    const filter = getFilter(getState());
    dispatch(Actions.editFilter(groupId,  types.ConfigT.GENRE));
    return dispatch(fetchIfNeeded(ConfigId, filter.selectedPage, groupId, types.ConfigT.GENRE, filter))
};
//Called by the ui; updates the selected config;  calls `fetchProductsIfNeeded`
export const setType = (groupId) => (dispatch, getState) => {
    const ConfigId = Helpers.getConfigId(getState(), types.ConfigT.TYPE, groupId);
    const filter = getFilter(getState());
    dispatch(Actions.editFilter(groupId,  types.ConfigT.TYPE));
    return dispatch(fetchIfNeeded(ConfigId, filter.selectedPage, groupId, types.ConfigT.TYPE, filter))
};

//Called by the ui; updates the selected config;  calls `fetchProductsIfNeeded`
export const setCategory = (groupId) => (dispatch, getState) => {
    const ConfigId = Helpers.getConfigId(getState(), types.ConfigT.CATEGORY, groupId);
    const filter = getFilter(getState());
    dispatch(Actions.editFilter(groupId,  types.ConfigT.CATEGORY));
    return dispatch(fetchIfNeeded(ConfigId, filter.selectedPage, groupId, types.ConfigT.CATEGORY, filter))
};
//====================================================================


